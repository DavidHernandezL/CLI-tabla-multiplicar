
const {createFile} = require('./helpers/multiplication');
const argv = require('./config/yargs');
  

console.clear();


createFile(argv.b,argv.l,argv.h)
  .then( nameFile => console.log(nameFile,'created'))
  .catch(err => console.log(err));