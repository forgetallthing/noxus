#!/usr/bin/env node
const program = require('commander');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

// 查看版本号
program.version(require('./package.json').version, '-v --verison');

// 帮助信息
helpOptions();

// 创建其他指令
createCommands();

// ceshi 1111

program.parse(process.argv);
