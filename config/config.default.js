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
      urls: [
        { url: 'openapi.yml', name: '服务接口' },
        { url: 'webapi.yml', name: '网页接口' }
      ],
      layout: 'StandaloneLayout'
    }
  };

  return exports;

};
