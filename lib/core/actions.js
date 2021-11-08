const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const open = require('open');
const path = require('path');
const colors = require('colors-console');
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { ejsCompile } = require('../utils/file');

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

const handleEjsToFile = async (name, dest, template, filename) => {
    // 1.获取模块引擎的路径
    const templatePath = path.resolve(__dirname, template);
    const result = await ejsCompile(templatePath, { name, lowerName: name.toLowerCase() });
    console.log(result);

    // 2.写入文件中 判断文件不存在,那么就创建文件
    mkdirSync(dest);
    const targetPath = path.resolve(dest, filename);
    writeFile(targetPath, result);
};

const addComponent = async (name, dest) => {
    handleEjsToFile(name, dest, '../templates/vue-component.ejs', `${name}.vue`);
};

const addPage = async (name, dest) => {
    addComponent(name, dest);
    handleEjsToFile(name, dest, '../templates/vue-router.ejs', 'router.js');
};

const addStore = async (name, dest) => {
    handleEjsToFile(name, dest, '../templates/vue-store.ejs', 'index.js');
    handleEjsToFile(name, dest, '../templates/vue-types.ejs', 'types.js');
};

module.exports = {
    createProjectAction,
    addComponent,
    addPage,
    addStore,
};
