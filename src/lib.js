'use strict';

module.exports = (path) => {
  require('throng')(process.env.WEB_CONCURRENCY, () => { require(path); });
};
