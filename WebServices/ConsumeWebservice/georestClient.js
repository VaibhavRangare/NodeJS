const yargs = require('yargs')
const gorest = require('./gorest')

yargs.command({
    command: 'find',
    describe: 'find a comment',
    handler: (argv) => {
        gorest(process.argv[3], (error, data) => {
            console.log(error)
            console.log(data)
        })
    }
})

yargs.parse()