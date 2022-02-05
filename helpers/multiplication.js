const fs = require('fs');
const colors = require('colors');
const path = require('path');

const createFile = async (base, toList, to) => {

  try {

    let out = '';
    consol = '';
    let nameFile = `tabla-${base}.txt`;
    path.join(__dirname,'out')

    for (let index = 1; index <= to; index++) {
      out += `${base} x ${index} = ${base * index}\n`;

      consol += `${base}`.gray + ` x `.red + `${index}` + ' = '.red + `${base * index}\n`.green;
    }

    fs.writeFileSync('./out/' + nameFile,out);

    if(!toList){
      return nameFile
    }

    console.log('====================='.green);
    console.log('  Tabla del:',base);
    console.log('====================='.green);
    console.log(consol)

    return nameFile
    
  } catch (error) {

    throw error
    
  }

}

module.exports = {
  createFile
}