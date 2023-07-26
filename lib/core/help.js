const program = require('commander');

const helpOptions = () => {
    program.option('-n --noxus', 'noxus cli');
    program.option('-d --dest <dest>', 'dest');

    program.on('--help', () => {
        console.log('');
        console.log('Other:');
        console.log('欢迎来到诺克萨斯');
    });
};

module.exports = helpOptions;
