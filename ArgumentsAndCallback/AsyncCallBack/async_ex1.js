// Function declaration using callback
const operation1 = (a, b, callback) => {
    setTimeout(() => {
        // Callback fucntion using argument
        callback(a + b)
    }, 1000)
}

// Function declaration using callback
const operation2 = (a, b, callback) => {
    setTimeout(() => {
        // Callback fucntion using arguments
        callback(a, b)
    }, 1000)
}

operation1(1, 5, (sum) => console.log("Finishing First Callback, Result: " + sum))

operation2(2, 6, (a, b) => {
    console.log('Finishing Second Callback, Result: ' + (a + b))
})

console.log("Finishing Main Thread")
