// OS - operating system module

// const os = require('os');
// or
// we can destructure
// const { type } = require("os");

const os = require("os");
// info about current user (about me)
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds
// console.log(`The system uptime is ${os.uptime} seconds`);

// about curent opretaing system
// os.type() - operating system type
// os.release() - operating system release date
// os.totalmem() - operating system total memory
// os.freemem() - operating system free memory

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
