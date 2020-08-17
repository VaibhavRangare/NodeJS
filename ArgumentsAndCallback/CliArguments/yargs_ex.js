const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add a user',
    handler: (argv) => {
        console.log('Title: ' + argv.title)
        // Logic to add a user
    }
})

//console.log(yargs.argv)
yargs.parse()