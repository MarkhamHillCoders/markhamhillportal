# Markhamhillportal

> Start by cloning this repo to your local machine

> Create your own branch, ... DO NOT submit to master branch! 

All submissions should be to your own branch and create a pull request and (for now) Daniel (only *) will push it to Master. (* Until everyone is on the same page and knows what they/you are doing.) 

> Our site is published at https://markhamhillcoders.github.io/markhamhillportal/

> Follow the Steps there, to get started.

## Week 1: http://localhost:4200/ with ng serve

## Week 2: http://localhost:3000/ with npm start

> testing routes works: http://localhost:3000/profile

Time to install the DB

npm install --save mongoose bluebird

> Week 3

Time Travel

> Week of 12:42 PM 2018-04-24

Let's use Firebase for Auth.
Plan: Working on Auth Today

BTW: use nodemon, but found annoying bug, which kept restarting nodemon, created a nodemon.json file to fix the bug

    Use:  nodemon --dump 
    OR: 
    nodemon --verbose

Something seems broken - going to fix it later

Load JSON for DB

1. yarn global add json-server
2. json-server --watch src/data/db.json --port 4000