const program = require("commander");

const helpOptions = () => {
  // 增加--help中的options
  program.option('-w,--why', 'a why cli')
  program.option('-d,--dest <dest>', 'a destination folder,例如: -d /src/components')
  program.option('-f,--framework <framework>', 'your framework')

  program.on('--help', function () {
    console.log("")
    console.log("other:")
    console.log("  other options")
  })

}

module.exports = helpOptions
