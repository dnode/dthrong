#! /usr/bin/env node
'use strict';

let path = process.cwd() + '/' + require(process.cwd() + '/package.json').main;
require('throng')(
  () => { require(path); },
  {
    workers: process.env.WEB_CONCURRENCY,
    lifetime: Infinity
  }
);
