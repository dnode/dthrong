'use strict';

module.exports = (path) => {
  require('throng')(
      () => { require(path); },
      { workers: process.env.WEB_CONCURRENCY }
  );
};
