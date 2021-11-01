const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const colors = require('colors-console');

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

    // 4.打开浏览器
};

module.exports = {
    createProjectAction,
};
