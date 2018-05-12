Angular Update Guide - 5.2 -> 6.0 for Basic Apps
Before updating

Switch from HttpModule and the Http service to HttpClientModule and the HttpClient service. HttpClient simplifies the default ergonomics (You don't need to map to json anymore) and now supports typed return values and interceptors. Read more on angular.io

During the update

Make sure you are using Node 8 or later


Update your Angular CLI globally and locally, and migrate the configuration to the new angular.json format by running the following:

npm install -g @angular/cli
npm install @angular/cli
ng update @angular/cli


Update all of your Angular framework packages to v6, and the correct version of RxJS and TypeScript.

ng update @angular/core

After the update, TypeScript and RxJS will more accurately flow types across your application, which may expose existing errors in your application's typings


Update Angular Material to the latest version.

ng update @angular/material

This will also automatically migrate deprecated APIs.


Use ng update or your normal package manager tools to identify and update other dependencies.

After the update

Remove deprecated RxJS 6 features using rxjs-tslint auto update rules.

For most applications this will mean running the following two commands:

npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json


Once you and all of your dependencies have updated to RxJS 6, remove rxjs-compat.

-----------
Package not installed: "@angular/material". Skipping.
We analyzed your package.json, there are some packages to update:

    Name                               Version                  Command to update
    --------------------------------------------------------------------------------
    @angular/core                      5.2.6 -> 6.0.1           ng update @angular/core
    rxjs                               5.5.6 -> 6.1.0           ng update rxjs