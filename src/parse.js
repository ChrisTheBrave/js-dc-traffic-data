// let filesystem = require('fs');
//
// let contentsOfTheFile = filesystem.readFileSync('./data.csv');
// // the contents of the file are actually a Buffer
// // console.log( contentsOfTheFile.toString() );
// let stringValue = contentsOfTheFile.toString();
// let rows = stringValue.split('\n');
// console.log(rows);


 module.exports =function parse(fileName) {
  let filesystem = require('fs');

  let inputData = filesystem.readFileSync(fileName);

  console.log(inputData);
  console.log('\n\n\n\n\n\n\n\n\n');

  let stringData = inputData.toString();

  console.log(stringData);
  console.log('\n\n\n\n\n\n\n\n\n');

  let entriesData = stringData.split( '\n' );

  console.log(entriesData);
  console.log('\n\n\n\n\n\n\n\n\n');
  // made an array of strings that are each one row of the file. now we
  // want to step over the array looking at each row one at a time.
  // with each row, we want to split it at the commas
  let returnData = [];

  for( let index = 0; index < entriesData.length; index++) {
    returnData.push( entriesData[index].split( ',' ) );


  }



  console.log(returnData);

  return returnData;

}
// ;


// module.exports

//parse('traffic-data/simple_data/moving_jan_2016.csv');
