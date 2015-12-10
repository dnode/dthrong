#! /usr/bin/env node
'use strict';

let path = process.cwd() + '/' + process.argv[2];
let workers = process.argv[3] ? process.env[process.argv[3]] : undefined;
require('./lib.js')(path, workers);
