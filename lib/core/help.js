const program = require('commander');

const helpOptions = () => {
    program.option('-n --noxus', 'noxus cli');
    program.option('-d --dest <dest>', 'dest');

    program.on('--help', () => {
        console.log('注意了');
        console.log('Other:');
        console.log('欢迎来到诺克萨斯~');
    });
};

module.exports = helpOptions;
