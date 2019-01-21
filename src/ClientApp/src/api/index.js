/* global gapi */

const handleStatus = (status) => console.log('signin status', status);

const api = {
  authenticate: (onAuthenticatedCalback) => {
    gapi.client.init({
      /** MISSING THESE VALUES ON PURPOSE */
      scope: 'https://www.googleapis.com/auth/spreadsheets'
    }).then(() => {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(handleStatus);
      handleStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      gapi.auth2.getAuthInstance().signIn();
    }, (error) => {
      handleStatus(JSON.stringify(error, null, 2));
    });

  },
};

export default api;
