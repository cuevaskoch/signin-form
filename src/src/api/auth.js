/* global gapi */

const auth = {
  authenticate: (onAuthStatusChange, onAuthError = console.log) => {
    gapi.client.init({
      clientId: '882426312595-021gfngkdrjtb8foj2r4pmrf4iuhv93s.apps.googleusercontent.com',
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
