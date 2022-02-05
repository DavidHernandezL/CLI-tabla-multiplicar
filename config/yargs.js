const argv = require('yargs')
  .options({
    'b':{
      alias:'base',
      type:'number',
      demandOption: true,
      describe: 'The multiplication table base'
    },
    'l':{
      alias: 'list',
      type: 'boolean',
      default: false,
      describe: 'To list the multiplication table'
    },
    'h':{
      alias:'hasta',
      type: 'number',
      default: 10
    }
  })
  .check((argv) =>{
    if(isNaN(argv.b)){
      throw 'The base have to a number'
    }
    if(isNaN(argv.h)){
      throw 'The element hasta must a number'
    }
    return true;
  })
  .argv;

  module.exports = argv;