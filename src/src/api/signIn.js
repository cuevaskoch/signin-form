/* global gapi */
import moment from 'moment';
import { SIGNIN_LOG_SHEET_ID, SIGNIN_LOG_RANGE } from '../config';

const log = ({ firstName, lastName, emailAddress, phoneNumber }) => {
  var params = {
    spreadsheetId: SIGNIN_LOG_SHEET_ID,
    range: SIGNIN_LOG_RANGE,
    valueInputOption: 'USER_ENTERED',
  };

  const valueRangeBody = {
    values: [
      [firstName, lastName, emailAddress, phoneNumber, moment().format()],
    ],
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  return request;
};

export default {
  log,
};
