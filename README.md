# Sign-in Form

Proof-of-concept Sign-in Form that can check membership status at time of sign-in.

## Workflow

1. Start the app (as described below).
1. Authorize with your Google account that has access to both the signin log and member
   data spreadsheets.
1. Fill out the Sign In form.  All fields are required.  There's currently no good error
   messages displayed to the user -- it's just a POC, after all.
1. Hit 'Submit'.  Sign-in Form will save the values you entered to the sign-in sheet
   and display whether your email was found in the member data spreadsheet.

## Running the app

### Quick start

This project uses `create-react-app`.  Running it is a breeze, provided you have nodejs and yarn
(or npm) already installed.

```bash
$ cd ./src
$ yarn            # Or npm install
$ yarn start      # Or npm start
```

Your browser should automatically launch http://localhost:3000.

### Via Docker

Build and run the docker container.  The included Google Client ID being used is
restricted and works only from `localhost:3000` so run accordingly.

```bash
$ docker build -t signin-form .
$ docker run -p 3000:80 signin-form
```

Then browse to http://localhost:3000.

## Configuration

Modify `./src/config.js` to suit your needs.  Gotta love those MVPs with their hardcoded config
values.

It might be nice to have the user select the sheet for logging (or create one) on setup.
