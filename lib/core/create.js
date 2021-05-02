const program = require("commander");

const {
  createProjectAction,
  addComponentAction,
} = require("./actions");

const createCommands = () => {
  program
    .command('create <project> [others...]') // [other...] 可变参数
    .description('clone repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component,例如:limbo addcpn HelloWorld [-d src/components]')
    .action(name => addComponentAction(name, program.dest || 'src/components'))
}

module.exports = createCommands
