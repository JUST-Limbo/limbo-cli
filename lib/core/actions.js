const { promisify } = require('util')

const download = promisify(require("download-git-repo"));
const open = require("open");
const path = require("path");


const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal")
const { compile, writeToFile } = require("../utils/utils")

const createProjectAction = async (project) => {
  // 1.clone项目
  await download(vueRepo, project, { clone: true })
  // 2.执行npm i
  const command = process.platform === "win32" ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // 3.运行 npm run serve
  commandSpawn(command, ['run serve'], { cwd: `./${project}` })
  // 4.打开浏览器
  open('htto://localhost:8080')
}

const addComponentAction = async (name, dest) => {
  // 1.有对应的ejs模板
  // 2.编译ejs模板 result
  const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
  // 3.将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  console.log(targetPath)
  writeToFile(targetPath, result)
  // 4.放到对应的文件夹中
}

module.exports = {
  createProjectAction,
  addComponentAction
}
