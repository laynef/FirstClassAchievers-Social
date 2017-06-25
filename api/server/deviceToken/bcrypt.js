const genSalt = (num) => {
    return num.toString().split('').map((e, i)=> i % 4 == 0 ? e.charCodeAt(0).toString(8) : i % 2 == 0 ? e.toString(16) :  e.charCodeAt(0).toString()).join('')
}
const createHash = (data, salt, callback) => {
    let str = '$' + JSON.stringify(data + salt).split('').map((e, i)=> i % 4 == 0 ? e.charCodeAt(0).toString() : e.toString(16)).join('')
    // sort function for more scrambling
    callback(str)
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

