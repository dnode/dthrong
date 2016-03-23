#! /usr/bin/env node
'use strict';

require('./lib.js')(process.cwd() + '/' + require(process.cwd() + '/package.json').main);
