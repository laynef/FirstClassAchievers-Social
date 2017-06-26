// setTimeout for expires

const genSalt = (num) => {
    if (num < 999999) return (num * 4396).toString(16) + (num * 4396).toString(8)
    return num.toString(16) + num.toString(8)
}
const createHash = (data, salt, callback) => {
    let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (3 * i)).toString(16)).join('') + JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (3 * i)).toString(8)).join('')
    callback(`$${str}`)
}
const verifyHash = (hashedData, data, salt, callback) => {
    return createHash(data, salt, (result) => {
        callback(result == hashedData, result != hashedData)
    })
}

const initialToken = () => Math.floor(Math.random() * 99999999999) + 10000000000

module.exports = {
    genSalt: genSalt,
    createHash: createHash,
    verifyHash: verifyHash,
    initialToken: initialToken
}

