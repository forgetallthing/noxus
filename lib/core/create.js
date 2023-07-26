const program = require('commander');
const { createProjectAction, addComponent, addPage, addStore } = require('./actions');

const createCommand = () => {
    program.command('create <project> [others...]').description('创建你的诺克萨斯档案，输入你的名字，小子').action(createProjectAction);

    program
        .command('addcpn <name>')
        .description('创建你的武器, 例如: noxus addcpn axe [-d src/components]')
        .action((name) => addComponent(name, program.dest || 'src/components'));

    program
        .command('addpage <name>')
        .description('创建你的军团, 例如: noxus addpage army [-d dest]')
        .action((name) => {
            addPage(name, program.dest || `src/pages/${name.toLowerCase()}`);
        });

    program
        .command('addstore <name>')
        .description('创建你的智库, 例如: noxus addstore head [-d dest]')
        .action((name) => {
            addStore(name, program.dest || `src/store/modules/${name.toLowerCase()}`);
        });
};

module.exports = createCommand;
