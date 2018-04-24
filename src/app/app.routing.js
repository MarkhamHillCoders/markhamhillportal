"use strict";
let router_1 = require('@angular/router');
let home_component_1 = require('./components/home/home.component');
let profile_component_1 = require('./components/profile/profile.component');

let appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];

exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);