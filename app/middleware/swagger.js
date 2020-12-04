'use strict';

const mustache = require('mustache');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const compose = require('koa-compose');
const staticCache = require('koa-static-cache');

const INDEX_FILE_NAME = 'index.html';
const INDEX_FILE_PATH = path.join(__dirname, 'index.mustache');
const INDEX_FILE_OPTS = { encoding: 'utf8' };
const INDEX_FILE_TYPE = 'text/html';
const HASH_NAME = 'md5';
const HASH_ENCODING = 'base64';

function urlsToJson() {
  if (!this.urls || this.urls.length <= 0)
    return null;

  return JSON.stringify(this.urls);
}


module.exports = config => {

  const { staticOpts, swaggerOpts } = config;
  const stats = fs.statSync(INDEX_FILE_PATH);
  const template = fs.readFileSync(INDEX_FILE_PATH, INDEX_FILE_OPTS);
  const content = mustache.render(template, { ...swaggerOpts, _urls: urlsToJson });
  const buffer = new Buffer(content);
  const indexFile = {
    cacheControl: staticOpts.cacheControl,
    maxAge: staticOpts.maxAge || 0,
    type: INDEX_FILE_TYPE,
    mtime: stats.mtime
  };

  indexFile.buffer = buffer;
  indexFile.md5 = crypto.createHash(HASH_NAME).update(buffer).digest(HASH_ENCODING);
  indexFile.length = buffer.byteLength;

  const swaggerStatic = staticCache(pathToSwaggerUi, staticOpts, {
    [staticOpts.prefix]: indexFile,
    [staticOpts.prefix + INDEX_FILE_NAME]: indexFile
  });
  if (!staticOpts.dir)
    return swaggerStatic;
  return compose(swaggerStatic, staticCache(staticOpts.dir, staticOpts));
};
