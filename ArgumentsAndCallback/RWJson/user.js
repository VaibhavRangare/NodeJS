const yargs = require('yargs')
const operations = require('./operations')

yargs.command({
    command: 'add',
    describe: 'add a user',
    handler: (argv) => {
        // Logic to add a user
        operations.addUser(process.argv[3], process.argv[4])
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a user',
    handler: (argv) => {
        // Logic to remove a user
        operations.removeUser(process.argv[3])

    }
})

yargs.parse()