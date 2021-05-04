#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const handlebars = require('handlebars')
const inquirer = require('inquirer')
const fs = require('fs')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')

program
  .version('0.1.0') // -v 或者 --version 的时候会输出该版本号

program.command('init <template> <project>')
  .description('初始化项目模板')
  .action(function (env) {
    console.log(env)
  })

program.command('list')
  .description('查看所有可用模板')
  .action(() => {
    console.log(111);
  })


program.parse(process.argv)
