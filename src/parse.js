let filesystem = require('fs');

let contentsOfTheFile = filesystem.readFileSync('./data.csv');
// the contents of the file are actually a Buffer
// console.log( contentsOfTheFile.toString() );
let stringValue = contentsOfTheFile.toString();
let rows = stringValue.split('\n');
console.log(rows);
