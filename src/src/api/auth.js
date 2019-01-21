/* global gapi */
import { CLIENT_ID } from '../config';

const auth = {
  authenticate: (onAuthStatusChange, onAuthError = console.log) => {
    gapi.client.init({
      clientId: CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthStatusChange);
      onAuthStatusChange(gapi.auth2.getAuthInstance().isSignedIn.get());
      gapi.auth2.getAuthInstance().signIn();
    }, (error) => {
      onAuthError(JSON.stringify(error, null, 2));
    });

  },
};

export default auth;
