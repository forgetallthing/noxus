const program = require('commander');

const helpOptions = () => {
    program.option('-n --noxus', 'noxus cli');
    program.option('-d --dest <dest>', 'dest');

    program.on('--help', () => {
        console.log('');
        console.log('Other:');
        console.log(' other options~');
    });
};

module.exports = helpOptions;
