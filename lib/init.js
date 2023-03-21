const path = require('path')
const inquirer = require('inquirer');
const workFolder = path.join(path.resolve(), "lib", "core")


module.exports = async function (...args) {
    inquirer
        .prompt([{
            type: "rawlist", // 交互类型 -- 有序单选
            message: "请选择模板类型:", // 引导词
            name: "template", // 自定义的字段名
            choices: ["wechat", "alipay", "vue2", "vue3", "react"], // 选项列表
        }])
        .then(async (answers) => {
            const cmdFile = path.join(workFolder, `${answers.template}.js`)
            const cmd = require(cmdFile);
            await cmd(...args)
            process.exit(0)
        });
}