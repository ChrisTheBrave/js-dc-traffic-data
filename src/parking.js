

//change to module.exports later
//function violations() {
  let dataParcer = require('./parse.js');
  let parkingData = dataParcer('traffic-data/simple_data/parking_feb_2016.csv');

  let items = ['VIOLATION_CODE', 'VIOLATION_DESCRIPTION', 'RP_PLATE_STATE' ];
  //
  // // loop (violationDataRequested)
  let violationCodeIndex = parkingData[0].indexOf('VIOLATION_CODE');
  let violationDecriptionIndex = parkingData[0].indexOf('VIOLATION_DESCRIPTION');
  let plateStateIndex = parkingData[0].indexOf('RP_PLATE_STATE');
  // let ticketTypeIndex = parkingData[0].indexOf('TICKETTYPE');
  // let violationCode = parkingData[0].indexOf('VIOLATIONCODE');
  // let penaltyTypeOne = parkingData[0].indexOf('PENALTY1');
  // let penaltyTypeTwo = parkingData[0].indexOf('PENALTY2');
  // let accidentIndicator = parkingData[0].indexOf('ACCIDENTINDICATOR');
  //
  //
  for (let index = 1; index < parkingData.length ; index++) {
    console.log('Parking Data for index: ' + index);
    console.log('VIOLATION_CODE:' + parkingData[index][violationCodeIndex]);
    console.log('\n');
    console.log('LOCATION:' + parkingData[index][violationDecriptionIndex]);
    console.log('\n');
    console.log('FINEAMT:' + parkingData[index][plateStateIndex]);
    console.log('\n');
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


}







  //return {};

//;

//violations();



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
