# ADP_API TEST

The idea: Build scalable NodeJS RestApi using express.js and mysql to assign appointments to pacients and noveties.
NodeJS Version Used: 12.17.0.

## Install dependencies

Run `npm install` to install all dependecies for the project.

## Create MySQL DB && Change Project DB Credentials

Run `CREATE SCHEMA 'adp';`. In Configs Folder open db.js file and change user and password. 

## Start the app 

Run `npm start` for a dev server. Navigate to `http://localhost:3000/` or Use the Postman Collection in `./routes/apis/v1/collection`.

## Data Base ER Diagram

![plot](https://github.com/pedroalejandropt/adp-health-back/blob/master/assets/er.png?raw=true)
