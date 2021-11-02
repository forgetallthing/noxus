const program = require('commander');
const { createProjectAction, addCpnAction } = require('./actions');

const createCommand = () => {
    program.command('create <project> [others...]').description('clone a repository into a folder').action(createProjectAction);

    program.command('addcpn <name> [others...]').description('add vue component，例如: noxus addcpn toolbar').action(addCpnAction);
};

module.exports = createCommand;
