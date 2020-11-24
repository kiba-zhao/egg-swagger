# egg-swagger #
基于[eggjs](https://eggjs.org/zh-cn/index.html)的swagger-ui插件。插件通过集成[swagger-ui-dist](https://github.com/swagger-api/swagger-ui#readme)，以及[koa-static-cache](https://github.com/koajs/static-cache#readme)来实现swagger-ui功能.

## 安装 ##
```bash
npm install git+ssh://git@github.com:kiba-zhao/egg-swagger.git --save
```

## 启用 ##
设置启用plugin: `config/plugin.js`
```javascript
exports.swagger = {
  enable:true,
  package:'egg-swagger',
  env:['local']
};
```

## 配置 (可选) ##
配置swagger-ui: `config/config.default.js`
```javascript
exports.swagger = {
    staticOpts: {
      prefix: '/docs/',
      dir: path.join(appInfo.baseDir, 'app/docs'),
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
```

## 使用 ##
启用eggjs服务后，访问 http://localhost:7001/docs/
```bash
npm i
npm run dev
open http://localhost:7001/docs/
```


