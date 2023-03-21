const program = require('commander')


program
    .version(`wechat-alipay-cli ${require('../package').version}`)
    .usage('<command> [options]')

program
    .command('create <app-name>')
    .description('create a new project powered by wechat-alipay-cli')
    .option('-r, --registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
    .action((name, options) => {
        require('../lib/init')(name)
    })