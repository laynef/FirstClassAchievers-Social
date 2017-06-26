// SALT == WEB TOKEN
const genSalt = (num) => {
    if (num < 99999999) return (num * 4396).toString(16) + (num * 4396).toString(8)
    return num.toString(16) + num.toString(8)
}
const createHash = (data, salt, callback) => {
    let str = JSON.stringify(data + salt).split('').map((e, i) => (e.charCodeAt(0) + (31 * i)).toString(16)).join('') + salt
    callback(`$${str}`)
}
const verifyHash = (hashedData, data, salt, callback) => {
    return createHash(data, salt, (result) => {
        callback(result == hashedData, result != hashedData)
    })
}

module.exports = {
    genSalt: genSalt,
    createHash: createHash,
    verifyHash: verifyHash
}

