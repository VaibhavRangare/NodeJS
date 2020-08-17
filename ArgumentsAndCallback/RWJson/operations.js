const fs = require('fs')
const chalk = require('chalk')

const addUser = (user, dept) => {
    console.log("Performing Add User from operations module")
    users = getUsers()
    duplicates = users.filter((item) => {
        return item.user === user
    })
    if (duplicates.length === 0) {
        users.push({
            user: user,
            dept: dept
        })
        console.log("New User added")
    }
    saveUser(users)
}
const saveUser = (users) => {
    json_string = JSON.stringify(users)
    fs.writeFileSync('users.json', json_string)
}
const removeUser = (user) => {
    console.log("Performing Remove User from operations module")
    users = getUsers()
    remainingUsers = users.filter((item) => {
        return item.user != user
    })
    if (users.length > remainingUsers.length) {
        saveUser(remainingUsers)
    }
    else {
        console.log(chalk.red.inverse('No user Found to remove'))
    }

}
const getUsers = () => {
    console.log("Performing Get User from operations module")
    try {
        const data = fs.readFileSync('users.json')
        let json_string = data.toString()
        return JSON.parse(json_string)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    removeUser: removeUser
}
