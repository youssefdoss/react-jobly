# Jobly Backend

This is the full-stack Jobly (job search) application. This project builds a RESTful job search API using Node.js, Express, and PostgreSQL on the back end. On the front end, it builds a React UI using the aforementioned back end.

## Back End

## Back End Table of Contents

- [Back End Manual Installation](#back-end-project-structure)
- [Back End Commands](#back-end-commands)
- [Project Structure](#back-end-project-structure)
- [API Endpoints](#api-endpoints)
- [Front End](#front-end)

## Manual Installation

To clone the repo:

    git clone git@github.com:youssefdoss/react-jobly.git
    cd react-jobly/backend

To install the dependencies:

    npm install

## Back End Commands

To run this in development:

    node server.js

To run the tests:

    jest -i

## Back End Project Structure

```
coverage\       # Coverage report
helpers\        # Helper for SQL and tokens
middleware\     # Authorization middleware
models\         # PSQL models
routes\         # Routes
schemas\        # Schemas
```

## API Endpoints

List of available routes:

**Auth routes**:\
`POST auth/token` - Get auth token\
`POST auth/register` - Register\

**Companies routes**:\
`POST companies` - Add company\
`GET companies` - Get all companies\
`GET companies/:handle` - Get company\
`PATCH companies/:handle` - Update company\
`DELETE companies/:handle` - Delete company\

**Jobs routes**:\
`POST jobs` - Add job\
`GET jobs` - Get all jobs\
`GET jobs/:id` - Get job\
`PATCH jobs/:id` - Update job\
`DELETE jobs/:id` - Delete job\

**Users routes**:\
`POST users` - Add user\
`GET users` - Get all users\
`GET users/:username` - Get user\
`PATCH users/:username` - Update user\
`DELETE users/:username` - Delete user\
`POST users/:username/jobs/:id` - Apply to job\

## Front End

## Front End Table of Contents

- [Front End Manual Installation](#front-end-manual-installation)
- [Front End Commands](#front-end-commands)
- [Front End Project Structure](#front-end-project-structure)
- [Back End](#back-end)

## Front End Manual Installation

To enter the front end directory:

    cd react-jobly/frontend

To install the dependencies:

    npm i

## Front End Commands

To run this in development:

    npm start

To run the rests:

    npm tests

## Front End Project Structure

```
public\         # Public folder
|--logos\       # Generic company logos
src\
|--api\         # API calls
|--common\      # Generic small components
|--companies\   # Company components
|--contexts\    # Context available across app
|--forms\       # Form components
|--homepage\    # Homepage
|--jobs\        # Job components
|--route-nav\   # Routes and navbar
|--JoblyApp\    # Brain component
```