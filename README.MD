# Plant Catalogue
### A CRUD app that displays different plants portfolio created by users. The app is instant when doing any of the CRUD applications and there's no need to refresh. for deployement on heroku some justification has been made to host both client and server side together.

## Tech Stack

### Front-End
    - Material UI
    - React
    - Axios

### Back-end
    - Postgres
    - NodeJS
    - Express

### Testing
    - Cypress



#
## To run the app follow the underlined steps:

1. If running on local device before running the server, comment out `process.env.PORT ||` in server.js `line 90` 

2. In the Server project folder run `npm install` to install all dependencies

3. In the Client project folder run `npm install` to install all dependencies

4. In the Server project folder run `npm start`

5. In the Client project folder run `npm start`

6. app will run on `https://localhost:3000`


## To test the app follow the underlined steps:
1. switch to app_testing branch 
2. In the Server project folder run `npm start`
3. In the Client project folder run `npm start`
4. In the root directory run the following commant line : `./node_modules/.bin/cypress open             
` 
5. when cypress page opens open sample_spec.js and follow the tests.

Open [https://plant-catalogue.herokuapp.com/](https://plant-catalogue.herokuapp.com/) to view it in the browser.
#