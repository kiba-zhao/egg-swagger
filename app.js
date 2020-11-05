'use strict';

const MW_NAME = 'swagger';
const STATIC = 'static';

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf(STATIC);
  if (index === -1) {
    app.config.coreMiddleware.push(MW_NAME);
  } else {
    app.config.coreMiddleware.splice(index, 0, MW_NAME);
  }
};
