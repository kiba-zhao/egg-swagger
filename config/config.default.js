/**
 * @fileOverview 默认配置文件
 * @name config.default.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = app => {

  const exports = {};

  exports.swagger = {
    staticOpts: {
      prefix: '/public/docs/',
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000
    },
    swaggerOpts: {
      title: app.name,
      url: 'openapi.yml',
      layout: 'StandaloneLayout'
    }
  };

  return exports;

};
