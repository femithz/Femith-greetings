webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = /** @class */ (function () {
    function AdminService(_http) {
        this._http = _http;
    }
    AdminService.prototype.send = function (body) {
        return this._http.post('http://127.0.0.1:3000/message', body, {
            observe: 'body',
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    { path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\r\n}\r\n\r\nbody {\r\n  padding-top: 56px;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .offcanvas-collapse {\r\n    position: fixed;\r\n    top: 56px; /* Height of navbar */\r\n    bottom: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    background-color: #343a40;\r\n    -webkit-transition-timing-function: ease-in-out;\r\n            transition-timing-function: ease-in-out;\r\n    -webkit-transition-duration: .3s;\r\n            transition-duration: .3s;\r\n    -webkit-transition-property: left, visibility;\r\n    transition-property: left, visibility;\r\n  }\r\n  .offcanvas-collapse.open {\r\n    left: 0;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.nav-scroller {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller .nav {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-wrap: nowrap;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-underline .nav-link {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-underline .nav-link:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.nav-underline .active {\r\n  font-weight: 500;\r\n  color: #343a40;\r\n}\r\n\r\n.text-white-50 { color: rgba(255, 255, 255, .5); }\r\n\r\n.bg-purple { background-color: #6f42c1; }\r\n\r\n.lh-100 { line-height: 1; }\r\n\r\n.lh-125 { line-height: 1.25; }\r\n\r\n.lh-150 { line-height: 1.5; }\r\n\r\n/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n\r\n/* Padding below the footer and lighter body text */\r\n\r\nbody {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    /* color: #5a5a5a; */\r\n  }\r\n\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n\r\n/* Carousel base class */\r\n\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n/* Since positioning the image, we need to help out the caption */\r\n\r\n.carousel-caption {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n  }\r\n\r\n/* Declare heights because of positioning of img element */\r\n\r\n.carousel-item {\r\n    height: 32rem;\r\n    /* background-color: #777; */\r\n  }\r\n\r\n.carousel-item > img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n  }\r\n\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n\r\n/* Center align the text within the three columns below the carousel */\r\n\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n.marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n\r\n/* Featurettes\r\n  ------------------------- */\r\n\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n\r\n/* Thin out the marketing headings */\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import '../../node_modules/css/color/default.css';
// import '../../node_modules/css/style.css';
// import '../../node_modules/js/custom.js';
// import '../../node_modules/js/jquery-3.2.1.min.js';
// import '../../node_modules/js/jquery-migrate-3.0.0.min.js';
// import '../../node_modules/js/jquery.parallax-scroll.js';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_service__ = __webpack_require__("./src/app/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {  MatSnackBarModule } from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                // MatSnackBarModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__admin_service__["a" /* AdminService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n        <div class=\"container\">\n            <a class=\"footer-brand \" style=\"font-weight: 200px;\">Ajayi Oluwafemi</a>\n            <ul class=\"social-buttons float-right\" >\n                <li>\n                    <a href=\"https://twitter.com/CreativeTim\" class=\"btn btn-just-icon btn-link btn-twitter\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.facebook.com/CreativeTim\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n                        <i class=\"fa fa-dribbble\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.instagram.com/CreativeTimOfficial\" class=\"btn btn-just-icon btn-link btn-instagram\">\n                        <i class=\"fa fa-instagram\"></i>\n                    </a>\n                </li>\n                <!-- <div>\n<p class=\"float-right\">Drop a message <a href=\"#section-message\" class=\"btn btn-info \">Message Me</a></p>\n                </div> -->\n                <div class=\"copyright float-right\">\n                        Drop a message <a href=\"#section-message\" class=\"btn btn-info \">Message Me</a>\n                      ©\n                      <script>\n                          document.write(new Date().getFullYear())\n                      </script>2018, made \n                      <!-- <i class=\"material-icons\">favorite</i> -->\n                       by Femithz.\n                  </div>\n            </ul>\n        </div>\n      </footer>\n<br><br><br>\n<div class=\"main main-raised\">\n    <div class=\"team-4 section-image\" style=\"background-image: url(../../assets/img/background.jpg)\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">A big thank you to my family member at large Ajayi,Tayo and Ajasa </h2>\n                    <h5 class=\"description\">My Little Way of Saying a Big Thank you for been part of 2018, and for those in one way or the other are left out in the list below, i love you all...</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile\">\n                            <div class=\"card-header card-header-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"../../assets/img/alhaji.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"> Olayinka</h4>\n                            <h6 class=\"card-category text-muted\">Electrical Engineer</h6>\n                            <p class=\"card-description\">\n                                Thank you so much big bro,you are a role model.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile\">\n                            <div class=\"card-header card-header-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"../../assets/img/awonuga-sheriff.jpg\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Awonuga Sheriff </h4>\n                            <h6 class=\"card-category text-muted\">Software Developer</h6>\n                            <p class=\"card-description\">\n                                You are such a  Great personality, thank you sir.\n                            </p>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"col-md-3\">\n                        <div class=\"card card-profile\">\n                                <div class=\"card-header card-header-image\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"../../assets/img/emmanuel.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">Pastor Emmanuel</h4>\n                                <h6 class=\"card-category text-muted\"></h6>\n                                <p class=\"card-description\">\n                                    Thank you sir,for your spiritual advice all the time, i really appreciate..\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                            <div class=\"card card-profile\">\n                                    <div class=\"card-header card-header-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"../../assets/img/adeniyi.jpg\"/>\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Tayo Adeniyi</h4>\n                                    <h6 class=\"card-category text-muted\">Journalist</h6>\n                                    <p class=\"card-description\">\n                                            You are such a  wonderful personality,thank you.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    <div class=\"col-md-3\">\n                            <div class=\"card card-profile\">\n                                    <div class=\"card-header card-header-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"../../assets/img/rufus.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Fakayode Rufus</h4>\n                                    <h6 class=\"card-category text-muted\">Python Developer </h6>\n                                    <p class=\"card-description\">\n                                        Finding a good friend is really a wonderful thing.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-profile\">\n                                    <div class=\"card-header card-header-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"../../assets/img/toyosi.jpg\"/>\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Amuludun Toyosi</h4>\n                                    <h6 class=\"card-category text-muted\">Ceo Owl Media</h6>\n                                    <p class=\"card-description\">\n                                        You are such a  wonderful personality,<br> thank you sir.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>   \n                <div class=\"col-md-3\">\n                        <div class=\"card card-profile\">\n                                <div class=\"card-header card-header-image\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"../../assets/img/sam.jpg\"/>\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">Akinjisola Samuel</h4>\n                                <h6 class=\"card-category text-muted\">Graphic Designer</h6>\n                                <p class=\"card-description\">\n                                        Finding a good friend is really a wonderful thing.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                            <div class=\"card card-profile\">\n                                    <div class=\"card-header card-header-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"../../assets/img/wunmi.jpg\"/>\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Olawunmi</h4>\n                                    <h6 class=\"card-category text-muted\"></h6>\n                                    <p class=\"card-description\">\n                                            You are such a  wonderful personality, thank you so much.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    <div class=\"col-md-3\">\n                            <div class=\"card card-profile\">\n                                    <div class=\"card-header card-header-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"../../assets/img/bosun.jpg\"/>\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Olulode  Olatunbosun</h4>\n                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                    <p class=\"card-description\">\n                                            Finding a good friend is really a wonderful thing.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <div class=\"card card-profile\">\n                                        <div class=\"card-header card-header-image\">\n                                        <a href=\"#pablo\">\n                                            <img class=\"img\" src=\"../../assets/img/ope.jpg\"/>\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">jimoh Opeoluwa</h4>\n                                        <h6 class=\"card-category text-muted\">Developer</h6>\n                                        <p class=\"card-description\">\n                                                Finding a good friend is really a wonderful thing.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        <div class=\"col-md-3\">\n                                <div class=\"card card-profile\">\n                                        <div class=\"card-header card-header-image\">\n                                        <a href=\"#pablo\">\n                                            <img class=\"img\" src=\"../../assets/img/topmost.jpg\"/>\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Ariyo Temitope</h4>\n                                        <h6 class=\"card-category text-muted\">Chemist</h6>\n                                        <p class=\"card-description\">\n                                                You are such a  wonderful personality, thanks man.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                    <div class=\"card card-profile\">\n                                            <div class=\"card-header card-header-image\">\n                                            <a href=\"#pablo\">\n                                                <img class=\"img\" src=\"../../assets/img/drey.jpg\"/>\n                                            </a>\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <h4 class=\"card-title\">Asamu David</h4>\n                                            <h6 class=\"card-category text-muted\">Ceo Dave Farm</h6>\n                                            <p class=\"card-description\">\n                                                    You are such a  wonderful personality, thanks man.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                        <div class=\"card card-profile\">\n                                                <div class=\"card-header card-header-image\">\n                                                <a href=\"#pablo\">\n                                                    <img class=\"img\" src=\"../../assets/img/zainab.jpg\"/>\n                                                </a>\n                                            </div>\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">Ola</h4>\n                                                <h6 class=\"card-category text-muted\"></h6>\n                                                <p class=\"card-description\">\n                                                        You are such a  wonderful personality, i cherish you girl.\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                            \n                            <div class=\"col-md-3\">\n                                    <div class=\"card card-profile\">\n                                            <div class=\"card-header card-header-image\">\n                                            <a href=\"#pablo\">\n                                                <img class=\"img\" src=\"../../assets/img/qudus.jpg\"/>\n                                            </a>\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <h4 class=\"card-title\">Mr Qudus Oduwole</h4>\n                                            <h6 class=\"card-category text-muted\">Civic Engineer</h6>\n                                            <p class=\"card-description\">\n                                                    You are such a  wonderful personality, thanks sir.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                        <div class=\"card card-profile\">\n                                                <div class=\"card-header card-header-image\">\n                                                <a href=\"#pablo\">\n                                                    <img class=\"img\" src=\"../../assets/img/jide.jpg\"/>\n                                                </a>\n                                            </div>\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">Olajide Olanrewaju</h4>\n                                                <h6 class=\"card-category text-muted\">Developer</h6>\n                                                <p class=\"card-description\">\n                                                        You are such a  wonderful personality, thanks man.\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/olalu.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Olaoluwa</h4>\n                                                    <!-- <h6 class=\"card-category text-muted\">Developer</h6> -->\n                                                    <p class=\"card-description\">\n                                                            You are such a  wonderful personality, thanks for your impact bro.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/dotman.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Dotman</h4>\n                                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                                    <p class=\"card-description\">\n                                                            You are such a  wonderful personality, thank you sir.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/julipels.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Idowu Julius</h4>\n                                                    <h6 class=\"card-category text-muted\">Python Developer</h6>\n                                                    <p class=\"card-description\">\n                                                            The most humbled personality have met.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/rehan-haiden.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Mr Rehan Haider</h4>\n                                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                                    <p class=\"card-description\">\n                                                        You are such a  wonderful personality, thank you sir.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div> \n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/larry.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Larry Sully</h4>\n                                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                                    <p class=\"card-description\">\n                                                        You are such a  wonderful personality, thank you sir.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>   \n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/lara.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Oshindele Omolara</h4>\n                                                    <h6 class=\"card-category text-muted\"></h6>\n                                                    <p class=\"card-description\">\n                                                        You are such a  wonderful personality,<br> thank you sis.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>  \n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/jude.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Marvin Jude</h4>\n                                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                                    <p class=\"card-description\">\n                                                        You are such a  wonderful personality, thank you .\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>  \n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/adesewa.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Adeniran Adesewa</h4>\n                                                    <h6 class=\"card-category text-muted\"></h6>\n                                                    <p class=\"card-description\">\n                                                        You are such a  wonderful personality, thank you so much.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"card card-profile\">\n                                                    <div class=\"card-header card-header-image\">\n                                                    <a href=\"#pablo\">\n                                                        <img class=\"img\" src=\"../../assets/img/dan.jpg\"/>\n                                                    </a>\n                                                </div>\n                                                <div class=\"card-body\">\n                                                    <h4 class=\"card-title\">Amoka Daniel</h4>\n                                                    <h6 class=\"card-category text-muted\">Designer & Developer</h6>\n                                                    <p class=\"card-description\">\n                                                        Finding a good friend is really a wonderful thing.\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>   \n            </div>\n        </div>\n    </div>\n <br><br>\n            <div class=\"contactus-1 section-image\" id=\"section-message\" style=\"background-image: url(../../assets/img/love.jpg)\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-5\">\n                            <h2 class=\"title\">Get in Touch</h2>\n                            <h5 class=\"description\">\n                                Tell me what you wish i could change in this new year,and any other things...\n                            </h5>\n      \n                            <div class=\"info info-horizontal\">\n                                <div class=\"icon icon-primary\">\n                                    <i class=\"material-icons\">phone</i>\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">Give me a ring</h4>\n                                    <p> Femithz\n                                        <br> +234 81 450 195 60\n                                        <!-- <br> Mon - Fri, 8:00-22:00 -->\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5 ml-auto\">\n                            <div class=\"card card-contact\">\n                                <form [formGroup]=\"messageForm\">\n                                    <div class=\"card-header card-header-raised card-header-primary text-center\">\n                                        <h4 class=\"card-title\">Contact Me</h4>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group label-floating is-empty\">\n                                                    <label class=\"bmd-label-floating\">Name</label>\n                                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                                                    <span class=\"material-input\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"bmd-label-floating\">Email address</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n                                            <span class=\"material-input\"></span>\n                                        </div>\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label for=\"exampleMessage1\" class=\"bmd-label-floating\">Your Message</label>\n                                            <textarea formControlName=\"message\" class=\"form-control\" id=\"exampleMessage1\" rows=\"6\"></textarea>\n                                            <span class=\"material-input\"></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"card-footer justify-content-between\">\n                                        <button type=\"submit\" (click)=\"sendMessage()\" class=\"btn btn-primary pull-right\">Send Me Message</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n  </div>\n<footer class=\"footer\">\n  <div class=\"container\">\n      <a class=\"footer-brand\" href=\"#material-kit\">Femithz</a>\n      <ul class=\"social-buttons float-right\" >\n          <li>\n              <a href=\"https://twitter.com/CreativeTim\" class=\"btn btn-just-icon btn-link btn-twitter\">\n                  <i class=\"fa fa-twitter\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"https://www.facebook.com/CreativeTim\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n                  <i class=\"fa fa-dribbble\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"https://www.instagram.com/CreativeTimOfficial\" class=\"btn btn-just-icon btn-link btn-instagram\">\n                  <i class=\"fa fa-instagram\"></i>\n              </a>\n          </li>\n          <div class=\"copyright float-right\">\n                ©\n                <script>\n                    document.write(new Date().getFullYear())\n                </script>2018, made \n                <!-- <i class=\"material-icons\">favorite</i> -->\n                 by Femithz.\n            </div>\n      </ul>\n  </div>\n</footer>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__("./src/app/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MatSnackBar} from '@angular/material';


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, _adminService) {
        this._router = _router;
        this._adminService = _adminService;
        this.messageForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.sendMessage = function () {
        var _this = this;
        if (!this.messageForm.valid) {
            console.log('Invalid Form');
            return;
        }
        this._adminService.send(JSON.stringify(this.messageForm.value))
            .subscribe(function (data) {
            // this.snackBar.open('Message has been Successfully sent', 'success', {
            //   duration: 1000,
            // });
            _this.messageForm.reset();
            _this._router.navigate(['']);
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) { return console.error(error); });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map