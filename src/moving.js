
let dataParcer = require('./parse.js');

let movingData = dataParcer('traffic-data/simple_data/moving_jan_2016.csv');

let items = ['VIOLATIONDESC', 'LOCATION', 'FINEAMT', 'TICKETTYPE', 'VIOLATIONCODE', 'PENALTY1', 'PENALTY2', 'ACCIDENTINDICATOR'];

// loop (violationDataRequested)
let violationDescIndex = movingData[0].indexOf('VIOLATIONDESC');
let locationIndex = movingData[0].indexOf('LOCATION');
let fineAmtIndex = movingData[0].indexOf('FINEAMT');
let ticketTypeIndex = movingData[0].indexOf('TICKETTYPE');
let violationCode = movingData[0].indexOf('VIOLATIONCODE');
let penaltyTypeOne = movingData[0].indexOf('PENALTY1');
let penaltyTypeTwo = movingData[0].indexOf('PENALTY2');
let accidentIndicator = movingData[0].indexOf('ACCIDENTINDICATOR');

for (let index = 1; index < movingData.length ; index++) {
  //  console.log('Moving Data for index: ' + index); //All of these logs are still valueable
  //  console.log('VIOLATIONDESC:' + movingData[index][violationDescIndex]);
  //  console.log('\n');
  //  console.log('LOCATION:' + movingData[index][locationIndex]);
  //  console.log('\n');
  //  console.log('FINEAMT:' + movingData[index][fineAmtIndex]);
  //  console.log('\n');
  //  console.log('TICKETTYPE:' + movingData[index][ticketTypeIndex]);
  //  console.log('\n');
  //  console.log('VIOLATIONCODE:' + movingData[index][violationCode]);
  //  console.log('\n');
  //  console.log( 'PENALTY1:' + movingData[index][penaltyTypeOne]);
  //  console.log('\n');
  //  console.log('PENALTY2:' + movingData[index][penaltyTypeTwo]);
  //  console.log('\n');
  //  console.log('ACCIDENTINDICATOR:' + movingData[index][accidentIndicator]);
  //  console.log('\n');




//(______.push) push in values of console log into array

}

let violationCount = {}; //What was the most common violation type for a moving violation?

let fineTotal = 0; //What is the average fine amount?

let photoTotal = 0; //What is the total income from photo citations?

movingData.forEach(function callback(violation) {
  if (violation[violationCode] !== '' && !violationCount.hasOwnProperty(violation[violationCode])) {
    violationCount[violation[violationCode]] = 1;
  }
  else {
    violationCount[violation[violationCode]]++;
  }


  //console.log( typeof(violation[fineAmtIndex]) );
  if (Number(violation[fineAmtIndex])) {
    fineTotal += Number(violation[fineAmtIndex]);

  }
  //For total income of photo citations
  if (Number(violation[ticketTypeIndex])) {
    photoTotal += Number(violation[ticketTypeIndex]);
  }

});
//Answer to Question 3
let fineAverage = fineTotal / (movingData.length - 1);
 //console.log(fineTotal);
 //console.log(fineAverage);

 console.log(photoTotal);

//console.log(violationCount); still using this






///index 0 of my moving data
// [ 'X',
//    'Y',
//    'OBJECTID',
//    'ROW_',
//    'LOCATION',
//    'ADDRESS_ID',
//    'STREETSEGID',
//    'XCOORD',
//    'YCOORD',
//    'TICKETTYPE',
//    'FINEAMT',
//    'TOTALPAID',
//    'PENALTY1',
//    'PENALTY2',
//    'ACCIDENTINDICATOR',
//    'AGENCYID',
//    'TICKETISSUEDATE',
//    'VIOLATIONCODE',
//    'VIOLATIONDESC',
//    'ROW_ID' ],
