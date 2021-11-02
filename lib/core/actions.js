const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const open = require('open');
const colors = require('colors-console');
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');

const createProjectAction = async (project) => {
    console.log(colors('cyan', 'noxus helps you create your project~'));

    // 1.clone项目
    console.log(colors('cyan', 'clone项目模板中...'));
    await download(vueRepo, project, { clone: true });
    console.log(colors('green', 'clone项目模板完成'));

    // 2.执行npm install
    console.log(colors('cyan', '执行npm install中...'));
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['i'], { cwd: `./${project}` });
    console.log(colors('green', '执行npm install完成'));

    // 3.运行 npm run server
    console.log(colors('cyan', '启动服务中...'));
    commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });

    // 4.打开浏览器
    // open('http://localhost:8080/');
    console.log(colors('cyan', '构建流程已结束，请开始你的表演~'));
};

const addCpnAction = async (name, dest) => {
    console.log(colors('cyan', 'noxus helps you add your component~'));

    

    console.log(colors('cyan', '组件构建成功，请开始你的表演~'));
};

module.exports = {
    createProjectAction,
    addCpnAction,
};
