# FavrWebClient
The web client for the favr product

### Flask Server

You will need to install [Docker](https://docs.docker.com/engine/installation/) and [Docker-Compose](https://docs.docker.com/compose/install/).

To start the server with docker: `docker-compose build` then `docker-compose up -d` then you can access the site on `localhost:8000`

### Static Files

You will need
 - [NPM](https://www.npmjs.com/)
 - [Gulp](http://gulpjs.com/)
 - [Sass](http://sass-lang.com/) *make sure to install via the command line*

To build:
Goto the static folder
`cd app/static`

Install node packages
`npm i`

Run gulp build tool
`gulp`

If developing frontend run
`gulp watch`

Files are output to the `dist` directory
