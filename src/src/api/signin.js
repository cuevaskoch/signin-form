/* global gapi */
import moment from 'moment';
import * as config from '../config';

const normalize = str => (str || '').trim().toLowerCase();
const getIsInGoodStanding = ({ emailAddress }) => {
  var params = {
    spreadsheetId: config.MEMBER_DATA_SHEET_ID,
    range: config.MEMBER_DATA_EMAIL_RANGE,
  };

  const normalizedEmail = normalize(emailAddress);
  var request = gapi.client.sheets.spreadsheets.values.get(params);
  return request
    .then(response => response.result.values.map(row => normalize(row[0])))
    .then(emailAddresses => emailAddresses.some(email => email === normalizedEmail))
    .catch((er) => console.log('failed: ', er));
}

const log = ({ firstName, lastName, emailAddress, phoneNumber }) => {
  var params = {
    spreadsheetId: config.SIGNIN_LOG_SHEET_ID,
    range: config.SIGNIN_LOG_RANGE,
    valueInputOption: 'USER_ENTERED',
  };

  const now = moment().format();
  const valueRangeBody = {
    values: [[firstName, lastName, emailAddress, phoneNumber, now]],
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  return request;
};

export default {
  getIsInGoodStanding,
  log,
};
