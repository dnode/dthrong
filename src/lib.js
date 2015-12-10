'use strict';

const throng = require('throng');

module.exports = (path, workers) => {
  throng(
    () => { require(path); },
    {
      workers,
      lifetime: Infinity
    }
  );
};
