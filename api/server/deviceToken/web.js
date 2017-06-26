// Chaining on device
// salt == previous token

let header = {
    arrayOfFunctions: [
        (data, salt, callback) => {
            let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (3 * i)).toString(16)).join('') + JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (3 * i)).toString(8)).join('')
            callback(`$${str}`)
        },
        (data, salt, callback) => {
            let str = JSON.stringify(data + salt).split('').map((e, i) => Math.pow((e.charCodeAt(0) + (5 * i), 2)).toString(16)).join('')
            callback(`Â${str}`)
        },
        (data, salt, callback) => {
            let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (9 * i)).toString(8)).join('') + JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (2 * i)).toString(16)).join('')
            callback(`Í${str}`)
        },
        (data, salt, callback) => {
            let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (2 * i)).toString(16)).join('') + JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (4 * i)).toString(8)).join('')
            callback(`Ó${str}`)
        },
        (data, salt, callback) => {
            let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (8 * i)).toString(16)).join('') + JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (7 * i)).toString(8)).join('')
            callback(`Ç${str}`)
        }
    ],
    functionIndex: 0,
    token: '',
    verifyToken: (hashedData, data, salt, func, callback) => {
            return func(data, salt, (result) => {
            callback(result == hashedData, result != hashedData)
        })
    }
}

module.exports = header