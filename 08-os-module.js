const os = require('os')
const user=os.userInfo()
console.log(user)
const time=os.uptime
// console.log( time)
const currentOS={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)