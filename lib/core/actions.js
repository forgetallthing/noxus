const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');

const createProjectAction = async (project) => {
    // 1.clone项目
    await download(vueRepo, project, { clone: true });

    // 2.执行npm install
    await commandSpawn('npm');

    // 3.运行 npm run server

    // 4.打开浏览器
};

module.exports = {
    createProjectAction,
};
