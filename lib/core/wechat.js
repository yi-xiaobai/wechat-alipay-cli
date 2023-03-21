/**
 * 微信小程序模板创建
 */

const path = require('path')
module.exports = async function (projectName, options) {
    console.log('==>Get 这里是微信小程序');

    // 获取路径
    const cwd = options.cwd || process.cwd()
    const inCurrent = projectName === "."
    const name = inCurrent ? path.relative('../', cwd) : projectName
    const targetName = path.resolve(cwd, projectName || ".")

}