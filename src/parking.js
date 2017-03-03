

//change to module.exports later
function violations() {
  let dataParcer = require('./parse.js');
  let parkingData = dataParcer('traffic-data/simple_data/parking_feb_2016.csv');

  // let items = ['VIOLATIONDESC', 'LOCATION', 'FINEAMT', 'TICKETTYPE', 'VIOLATIONCODE', 'PENALTY1', 'PENALTY2', 'ACCIDENTINDICATOR'];
  //
  // // loop (violationDataRequested)
  // let violationDescIndex = movingData[0].indexOf('VIOLATIONDESC');
  // let locationIndex = movingData[0].indexOf('LOCATION');
  // let fineAmtIndex = movingData[0].indexOf('FINEAMT');
  // let ticketTypeIndex = movingData[0].indexOf('TICKETTYPE');
  // let violationCode = movingData[0].indexOf('VIOLATIONCODE');
  // let penaltyTypeOne = movingData[0].indexOf('PENALTY1');
  // let penaltyTypeTwo = movingData[0].indexOf('PENALTY2');
  // let accidentIndicator = movingData[0].indexOf('ACCIDENTINDICATOR');
  //
  //
  // for (let index = 1; index < parkingData.length ; index++) {
  //   console.log('Moving Data for index: ' + index);
  //   console.log('VIOLATIONDESC:' + movingData[index][violationDescIndex]);
  //   console.log('\n');
  //   console.log('LOCATION:' + movingData[index][locationIndex]);
  //   console.log('\n');
  //   console.log('FINEAMT:' + movingData[index][fineAmtIndex]);
  //   console.log('\n');
  //   console.log('TICKETTYPE:' + movingData[index][ticketTypeIndex]);
  //   console.log('\n');
  //   console.log('VIOLATIONCODE:' + movingData[index][violationCode]);
  //   console.log('\n');
  //   console.log( 'PENALTY1:' + movingData[index][penaltyTypeOne]);
  //   console.log('\n');
  //   console.log('PENALTY2:' + movingData[index][penaltyTypeTwo]);
  //   console.log('\n');
  //   console.log('ACCIDENTINDICATOR:' + movingData[index][accidentIndicator]);
  //   console.log('\n');
  //
  //
  //
  //






  //console.log(parkingData);











  return {}; //re
}
//;

violations();



// index 0 of parking data
// X,
// Y,
// OBJECTID,
// ROWID_,
// DAY_OF_WEEK,
// HOLIDAY,
// WEEK_OF_YEAR,
// MONTH_OF_YEAR,
// ISSUE_TIME,
// VIOLATION_CODE,
// VIOLATION_DESCRIPTION,
// LOCATION,
// RP_PLATE_STATE,
// BODY_STYLE,
// ADDRESS_ID,
// STREETSEGID,
// XCOORD,
// YCOORD,
// TICKET_ISSUE_DATE
