(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n\tmargin: 40px;\r\n}\r\n\r\n.sidebar {\r\n\t-ms-grid-row: 3;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: sidebar;\r\n}\r\n\r\n.sidebar2 {\r\n\t-ms-grid-row: 5;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: sidebar2;\r\n}\r\n\r\n.content {\r\n\t-ms-grid-row: 4;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: content;\r\n}\r\n\r\n.header {\r\n\t-ms-grid-row: 1;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: header;\r\n}\r\n\r\n.navbar {\r\n\t-ms-grid-row: 2;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: navbar;\r\n}\r\n\r\n.footer {\r\n\t-ms-grid-row: 6;\r\n\t-ms-grid-column: 1;\r\n\tgrid-area: footer;\r\n}\r\n\r\n.wrapper {\r\n\tbackground-color: #fff;\r\n\tcolor: #444;\r\n}\r\n\r\n.wrapper {\r\n\tdisplay: -ms-grid;\r\n\tdisplay: grid;\r\n\tgrid-gap: 1em;\r\n\t    grid-template-areas:\r\n        \"header\"\r\n        \"navbar\"\r\n\t\t\"sidebar\"\r\n\t\t\"content\"\r\n\t\t\"sidebar2\"\r\n\t\t\"footer\";\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n\t.wrapper {\r\n\t\t-ms-grid-columns: 20% auto;\r\n\t\t    grid-template-columns: 20% auto;\r\n\t\t    grid-template-areas:\r\n            \"header   header   header\"\r\n            \"navbar   navbar   navbar\"\r\n\t\t\t\"sidebar  content  sidebar2\"\r\n\t\t\t\"footer   footer   footer\";\r\n\t}\r\n\t.sidebar {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 1;\r\n\t}\r\n\t.sidebar2 {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 3;\r\n\t}\r\n\t.content {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 2;\r\n\t}\r\n\t.header {\r\n\t\t-ms-grid-row: 1;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n\t.navbar {\r\n\t\t-ms-grid-row: 2;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n\t.footer {\r\n\t\t-ms-grid-row: 4;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t.wrapper {\r\n\t\tgrid-gap: 20px;\r\n\t\t-ms-grid-columns: 250px auto 250px;\r\n\t\t    grid-template-columns: 250px auto 250px;\r\n\t\t    grid-template-areas:\r\n            \"header  header  header\"\r\n            \"navbar  navbar  navbar\"\r\n\t\t\t\"sidebar content sidebar2\"\r\n\t\t\t\"footer  footer  footer\";\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t.sidebar {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 1;\r\n\t}\r\n\t.sidebar2 {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 3;\r\n\t}\r\n\t.content {\r\n\t\t-ms-grid-row: 3;\r\n\t\t-ms-grid-column: 2;\r\n\t}\r\n\t.header {\r\n\t\t-ms-grid-row: 1;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n\t.navbar {\r\n\t\t-ms-grid-row: 2;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n\t.footer {\r\n\t\t-ms-grid-row: 4;\r\n\t\t-ms-grid-column: 1;\r\n\t\t-ms-grid-column-span: 3;\r\n\t}\r\n}\r\n\r\n.box {\r\n\tbackground-color: #444;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\tpadding: 10px;\r\n\tfont-size: 150%;\r\n}\r\n\r\n.header,\r\n.navbar,\r\n.footer {\r\n\tbackground-color: #999;\r\n}\r\n\r\n.sidebar2 {\r\n\tbackground-color: #ccc;\r\n\tcolor: #444;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"app\">\r\n    <nav class=\"navbar navbar-expand-sm bg-light\">\r\n        <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/\" class=\"nav-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/dashboard\" class=\"nav-link\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/members\" class=\"nav-link\">Members</a>\r\n        </li>\r\n        </ul>\r\n    </nav>\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrapper\">\r\n\t<div class=\"box header\">\r\n\t\t\t<app-header></app-header>\r\n\t</div>\r\n\r\n\t<div class=\"box navbar\">\r\n\t\t\t<app-navbar></app-navbar>\r\n\t</div>\r\n\t\r\n\t<div class=\"box sidebar\">\r\n\t\tSidebar #1\r\n\t\t<app-sidebar></app-sidebar>\r\n\t\t[News + Updates]\r\n\t</div>\r\n\r\n\t<div class=\"box sidebar2\">\r\n\t\tSidebar #2\r\n\t\t<app-sidebar2></app-sidebar2>\r\n\t\t[Login Box]\r\n\t</div>\r\n\r\n\t<div class=\"box content\">\r\n\t\t<!-- <h2>UserComp</h2> -->\r\n\t\t<app-user></app-user>\r\n\t\t\r\n\t\t<!-- <h2>Directory</h2>\t\t\r\n\t\t<app-directory></app-directory>\r\n\t\t<app-users></app-users> -->\r\n\r\n\t\t<!-- <UsersComponent></UsersComponent> -->\r\n\t</div>\r\n\r\n\t<!-- \r\n\t\t<div class=\"box content\">\r\n\t\t\t<h2>Directory</h2>\r\n\t\t\t<app-directory></app-directory>\r\n\t\t</div>\r\n\t-->\r\n\r\n\t<!-- <ul *ngFor=\"let item of items | async\">\r\n\t\t<li> {{item.name}}</li>\r\n\t</ul> -->\r\n\t\r\n\t<div class=\"box footer\">\r\n\t\t<app-footer></app-footer>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import 'rxjs/add/operator/map';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Markham Hill Portal';
        // user: Observable<firebase.User>;
        // items: Observable<any[]>;
        // constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
        //     this.afAuth.auth.signInAnonymously();
        //     this.user = this.afAuth.authState;
        //     this.items = db.collection('items').valueChanges();
        //   }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // @NgModule({
        //   imports: [
        //       RouterModule
        //   ],
        //   declarations: [
        //   ],
        //   exports: [
        //   ],
        //   providers: [
        //   ]
        // })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _components_sidebar2_sidebar2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar2/sidebar2.component */ "./src/app/components/sidebar2/sidebar2.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/weather/weather.component */ "./src/app/components/weather/weather.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user-details/user-details.component */ "./src/app/user/user-details/user-details.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _user_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user-new/user-new.component */ "./src/app/user/user-new/user-new.component.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _components_directory_directory_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/directory/directory.component */ "./src/app/components/directory/directory.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./member-detail/member-detail.component */ "./src/app/member-detail/member-detail.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
var routes = [
    { path: 'members', component: _users_users_component__WEBPACK_IMPORTED_MODULE_28__["UsersComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_12__["ResourcesComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_sidebar2_sidebar2_component__WEBPACK_IMPORTED_MODULE_13__["Sidebar2Component"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_15__["LocationComponent"],
                _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_16__["WeatherComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailsComponent"],
                _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
                _user_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_20__["UserNewComponent"],
                _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_22__["UserEditComponent"],
                _components_directory_directory_component__WEBPACK_IMPORTED_MODULE_23__["DirectoryComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_24__["MemberComponent"],
                _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_25__["MemberDetailComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_28__["UsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"] //,
                // AngularFireModule.initializeApp(FirebaseConfig.firebase),
                // AngularFirestoreModule,
                // AngularFireAuthModule,
                // AngularFireDatabaseModule
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [_users_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/directory/directory.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/directory/directory.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/directory/directory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/directory/directory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  directory works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/directory/directory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/directory/directory.component.ts ***!
  \*************************************************************/
/*! exports provided: DirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryComponent", function() { return DirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent() {
    }
    DirectoryComponent.prototype.ngOnInit = function () {
    };
    DirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directory',
            template: __webpack_require__(/*! ./directory.component.html */ "./src/app/components/directory/directory.component.html"),
            styles: [__webpack_require__(/*! ./directory.component.css */ "./src/app/components/directory/directory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <span class=\"text-muted\">All Rights Reserved | Markham Hill 2018</span>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  location works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  LoginComponent works!\r\n</p>\r\n\r\n<!-- <form [formGroup]=\"form\">\r\n<fieldset>\r\n    <legend>Login</legend>\r\n    <div class=\"form-field\">\r\n        <label>Email:</label>\r\n        <input name=\"email\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"form-field\">\r\n        <label>Password:</label>\r\n        <input name=\"password\" formControlName=\"password\" \r\n                type=\"password\">\r\n    </div>\r\n</fieldset>\r\n<div class=\"form-buttons\">\r\n    <button class=\"button button-primary\" \r\n            (click)=\"login()\">Login</button>\r\n</div>\r\n</form> -->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    // form: FormGroup;
    // constructor(private fb: FormBuilder,
    //   private authService: AuthService,
    //   private router: Router) {
    //   this.form = this.fb.group({
    //     email: ['', Validators.required],
    //     password: ['', Validators.required]
    //   });
    // }
    // login() {
    //   const val = this.form.value;
    //   if (val.email && val.password) {
    //     this.authService.login(val.email, val.password)
    //       .subscribe(
    //         () => {
    //           console.log("User is logged in");
    //           this.router.navigateByUrl('/');
    //         }
    //       );
    //   }
    // }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Fixed navbar -->\r\n <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Markham Hill</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\".\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>      \r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/dashboard\" class=\"nav-link\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"./directory\">Directory</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"./profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"./login\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/members\" class=\"nav-link\">Members</a>\r\n      </li>\r\n      \r\n\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 40px;\r\n  }\r\n  \r\n  .sidebar {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: sidebar;\r\n  }\r\n  \r\n  .content {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: content;\r\n    position: relative;\r\n  }\r\n  \r\n  .header {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: header;\r\n  }\r\n  \r\n  .footer {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: footer;\r\n  }\r\n  \r\n  .wrapper {\r\n          display: -ms-grid;\r\n          display: grid;\r\n      grid-gap: 10px;\r\n          -ms-grid-columns: 200px 200px 200px;\r\n              grid-template-columns: 200px 200px 200px;\r\n              grid-template-areas:\r\n      \"header  header  header\"\r\n          \"sidebar content content\"\r\n          \"footer  footer  footer\";\r\n          background-color: #fff;\r\n          color: #444;\r\n      }\r\n  \r\n  .box {\r\n    background-color: #444;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 50px;\r\n    font-size: 150%;\r\n  }\r\n  \r\n  .header,\r\n  .footer {\r\n    background-color: #999;\r\n  }\r\n  \r\n  .topleft {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .topright {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .bottomleft {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .bottomright {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n  }"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"box header\">Header</div>\r\n  <div class=\"box sidebar\">Sidebar</div>\r\n  <div class=\"box content\">Content resizes to fit the full area</div>\r\n  <div class=\"box footer\">Footer</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    box-sizing: border-box;\r\n  }\r\n  *, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\n  body {\r\n    margin: 40px;\r\n  }\r\n  .wrapper {\r\n    margin: 0 0 20px 0;\r\n    width: 500px;\r\n    height: 400px;\r\n    border: 2px solid #CCC;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    -ms-grid-columns: (80px)[4];\r\n        grid-template-columns: repeat(4, 80px);\r\n    -ms-grid-rows: (100px)[3];\r\n        grid-template-rows: repeat(3,100px);\r\n    align-content: space-around;\r\n    justify-content: space-between;\r\n  }\r\n  .box {\r\n    background-color: #444;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    font-size: 150%;\r\n  }\r\n  .item1 {\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 4;\r\n    grid-column: 1 / 5;\r\n  }\r\n  .item2 {\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 1 / 3;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 2;\r\n    grid-row: 2 / 4;\r\n  }\r\n  .item3 {\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 3 / 5;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper aligned\">\r\n  <div class=\"box item1\">One</div>\r\n  <div class=\"box item2\">Two</div>\r\n  <div class=\"box item3\">Three</div>\r\n  <div class=\"box item4\">Four</div>\r\n  <div class=\"box item5\">Five</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/resources/resources.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resources/resources.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/resources/resources.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resources works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/resources/resources.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/components/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/components/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sidebar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar2/sidebar2.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sidebar2/sidebar2.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar2/sidebar2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sidebar2/sidebar2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sidebar2 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar2/sidebar2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar2/sidebar2.component.ts ***!
  \***********************************************************/
/*! exports provided: Sidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar2Component", function() { return Sidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Sidebar2Component = /** @class */ (function () {
    function Sidebar2Component() {
    }
    Sidebar2Component.prototype.ngOnInit = function () {
    };
    Sidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar2',
            template: __webpack_require__(/*! ./sidebar2.component.html */ "./src/app/components/sidebar2/sidebar2.component.html"),
            styles: [__webpack_require__(/*! ./sidebar2.component.css */ "./src/app/components/sidebar2/sidebar2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Sidebar2Component);
    return Sidebar2Component;
}());



/***/ }),

/***/ "./src/app/components/weather/weather.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/weather/weather.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/weather/weather.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/weather/weather.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  weather works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/weather/weather.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/weather/weather.component.ts ***!
  \*********************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/components/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/components/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/member-detail/member-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  member-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent() {
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
    };
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Members List</h1>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Profile</th>  <!-- Links -->\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let member of members\">\r\n        <td>{{ member.name }}</td>\r\n        <td>{{ member.profile }}</td>\r\n        <td>Show Details</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberComponent = /** @class */ (function () {
    function MemberComponent(http) {
        this.http = http;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/member').subscribe(function (data) {
            _this.members = data;
        });
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/user/user-details/user-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserEditComponent = /** @class */ (function () {
    function UserEditComponent() {
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-new/user-new.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-new/user-new.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-new works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-new/user-new.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.ts ***!
  \*****************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserNewComponent = /** @class */ (function () {
    function UserNewComponent() {
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__(/*! ./user-new.component.html */ "./src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__(/*! ./user-new.component.css */ "./src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users List</h2>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(http) {
        this.http = http;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/user').subscribe(function (data) {
            _this.users = data;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:4000';
    }
    UserService.prototype.getUsers = function () {
        return this
            .http
            .get(this.url + "/results");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Profile</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{ user.id }}</td>\n      <td>{{ user.name }}</td>\n      <td><a href=\"{{ user.profile }}\">Profile Link</a></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/users/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DaCod\OneDrive\Documents\GitHub\markhamhillportal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map