# Dukes Wine Contact Management Api

## How to run
### Setup

This application will need to connect to a MongoDB server in order to read and write documents to the remote database. This application defines and uses a few environment variables that relate to this database's configuration and these
 environment variables need to be defined before the application can be run locally.
 
 I export these variables in an untracked file called `env.sh` in the root of this application which is sourced on
  the dev startup.
  
  The variables that need to be defined are as follows:
  - MONGO_DB_PSW
  - MONGO_DB_USR
  - MONGO_DB_HOST
  - MONGO_DB_URL
 

### Run locally

1. `npm install`
2. `npm run dev`

## View Documentation

This project uses [Swagger Ui](https://swagger.io/) to dynamically generate the documentation for the api routes.

This documentation can be accessed by visiting the `/docs` route or [localhost:$PORT/docs](http://localhost:3001/docs
) if
 you're running the
 application
 locally. 

