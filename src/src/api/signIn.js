/* global gapi */
import { SIGNIN_LOG_SHEET_ID, SIGNIN_LOG_RANGE } from '../config';

const log = ({ firstName, lastName, emailAddress, phoneNumber }) => {

  console.log('client', gapi.client);
  var params = {
    spreadsheetId: SIGNIN_LOG_SHEET_ID,
    range: SIGNIN_LOG_RANGE,
    valueInputOption: 'USER_ENTERED',
  };

  const valueRangeBody = [
    [firstName, lastName, emailAddress, phoneNumber, 'TODO TimeStamp'],
  ];

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });

};

export default {
  log,
};
