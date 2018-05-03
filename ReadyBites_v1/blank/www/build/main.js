webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signIn_signIn__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__["a" /* TabsControllerPage */], { username: this.username });
        //this.navCtrl.setRoot(TabPage);
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signIn_signIn__["a" /* SignInPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div>\n    <form  #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="UserName" name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <button ion-button ion-button outline color="royal" block [disabled]="!registerForm.form.valid" (click)="login()">Login</button>\n          <button ion-button ion-button outline color="royal" block (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Food } from '../../components/Food';

var SuggestionsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SuggestionsPage(navCtrl, http, transfer, file, geolocation) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.geolocation = geolocation;
        this.localhost = "128.237.195.202";
        this.standard = "distance";
        this.fileTransfer = this.transfer.create();
        this.geocoder = new google.maps.Geocoder();
    }
    SuggestionsPage.prototype.downloadImage = function (foodId) {
        alert("downloadImage");
        /*this.http.get('http://' + this.localhost + ':3000/image?id=' + foodId)
        .subscribe(data => {
          console.log(data);
        });*/
        //let url = 'http://pfister.ee.duke.edu/courses/ece485/dtft_table.pdf';
        var url = 'http://' + this.localhost + ':3000/image?id=' + foodId;
        this.fileTransfer.download(encodeURI(url), this.file.dataDirectory + 'foodId')
            .then(function (entry) {
            alert('download complete: ' + entry.toURL());
        }, function (error) {
            // handle error
            alert(error);
        });
    };
    SuggestionsPage.prototype.getData = function () {
        var _this = this;
        var getUrl = 'http://' + this.localhost + ':3000/food?standard=' + this.standard + '&longitude=' + this.longitude + '&latitude=' + this.latitude;
        this.http.get(getUrl).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            /*for (var i in data) {
              console.log(i);
              var type = data[i].type;
              console.log(type);
              var waitingTime = data[i].waitingTime;
              console.log(waitingTime);
              //var calories =  data[i].calories;
              //console.log(calories);
              var calories = 100;
              var taste =  data[i].taste;
              var price =  data[i].price;
              var image =  data[i].image;
              var coordinates = data[i]. coordinates;
              var address = data[i].address;
              var distance  = this.computeDistance(coordinates);
              console.log("before");
              this.foodArray.push(new Food(type, waitingTime, calories, taste, price, image,
                coordinates, address));
            }*/
            _this.foodArray = data;
            //console.log(this.foodArray);
        });
        console.log("after get req");
    };
    SuggestionsPage.prototype.getCurrentPosition = function () {
        var _this = this;
        console.log("enter getCurrentPosition");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.geocodelatLng(function (address) {
                _this.address = address;
                _this.getData();
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert("error for getCurrentPosition" + JSON.stringify(error));
        });
    };
    SuggestionsPage.prototype.getPositionByInput = function () {
        var _this = this;
        this.geocodeAddress(function (latitude, longitude) {
            _this.latitude = latitude;
            _this.longitude = longitude;
            _this.getData();
        });
    };
    SuggestionsPage.prototype.geocodelatLng = function (callback) {
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var address = results[0].formatted_address;
                console.log(address);
                callback(address);
            }
            else {
                console.log("Geocoding failed: " + status);
            }
        });
    };
    SuggestionsPage.prototype.geocodeAddress = function (callback) {
        console.log("enter geocodeAddress");
        this.geocoder.geocode({ 'address': this.address }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                callback(Number(latitude), Number(longitude));
                //callback(pos);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    SuggestionsPage.prototype.computeDistance = function (coordinates) {
    };
    SuggestionsPage.prototype.showDetails = function (food) {
        console.log("before pushing");
        console.log(food);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* Details */], food);
    };
    SuggestionsPage.prototype.render = function () {
        console.log("enter render");
        if (!this.address)
            this.getCurrentPosition();
        else
            this.getPositionByInput();
    };
    SuggestionsPage.prototype.onSegmentChanged = function ($event) {
        console.log("enter changeStandard");
        console.log($event);
        console.log(this.standard);
        this.getData();
    };
    SuggestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suggestions',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/suggestions/suggestions.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n    <ion-item [(ngModel)]="searchType" name="searchType">        \n      <ion-label> <ion-icon name="search"></ion-icon></ion-label>\n      <ion-input clearInput type="text" placeholder="Food Type"></ion-input>\n    </ion-item>\n    <ion-item [(ngModel)]="address" name="address">        \n      <ion-label> <ion-icon name="locate"></ion-icon></ion-label>\n      <ion-input clearInput type="text" placeholder="Current Location"></ion-input>\n    </ion-item>\n    <!--<ion-searchbar\n      [(ngModel)]="searchType"\n      name="searchType"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>-->\n    <!--<ion-select [(ngModel)]="Location" name="Location">\n    <ion-option>\n      Get your location\n    </ion-option>\n    </ion-select>-->\n    <button id="search" ion-button outline color="royal" block (click)="render()">\n        Search\n    </button>\n    <ion-row>\n        <ion-col width-15> \n          <button value="distance" ion-button outline color="royal" block (click)="onSegmentChanged($event)">\n            Distance\n          </button>\n        </ion-col>\n        <ion-col width-15>\n          <button value="calories" ion-button outline color="royal" block (click)="onSegmentChanged($event)">\n            Calories\n          </button>\n        </ion-col>\n        <ion-col width-15> \n            <button value="taste" ion-button outline color="royal" block (click)="onSegmentChanged($event)">\n            Taste\n            </button>\n          </ion-col>\n          <ion-col width-15>\n            <button value="price" ion-button outline color="royal" block (click)="onSegmentChanged($event)">\n            Price\n            </button>\n          </ion-col>\n      </ion-row>\n      <button id="test" ion-button outline color="royal" block (click)="downloadImage(1)">\n          test\n      </button>\n    <!--\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="standard" name ="standard" (change)="onSegmentChanged($event)">\n          <ion-segment-button value="distance">\n            Distance\n          </ion-segment-button>\n          <ion-segment-button value="calories">\n            Calories\n          </ion-segment-button>\n          <ion-segment-button value="taste">\n            Taste\n          </ion-segment-button>\n          <ion-segment-button value="price">\n            Price\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n    -->\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let food of foodArray" (tap)="showDetails(food)">\n      <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish">\n      <ion-card-content>        \n        <ion-card-title>\n            {{food.type}}\n        </ion-card-title>\n        <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n      </ion-card-content>\n    </ion-card>  \n</ion-content>\n\n<!--\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n-->\n  <!--\n    <div [ngSwitch]="standard">\n    <ion-list *ngSwitchCase="\'distance\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'calories\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'taste\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'taste\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    </div>\n  -->'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/suggestions/suggestions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SuggestionsPage);
    return SuggestionsPage;
}());

//# sourceMappingURL=suggestions.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignInPage.prototype.createAccount = function () {
        //save user info
        console.log("enter createAccount");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsPage */], { username: this.username });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signIn',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/signIn/signIn.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        SignIn\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img src="http://placehold.it/300x200"/>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <div>\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item>\n                <ion-input type="text" placeholder="UserName" name="username" [(ngModel)]="username" required></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n              </ion-item>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <button ion-button ion-button outline color="royal" block (click)="createAccount()">Create New Account</button>\n          </ion-col>\n        </ion-row>\n        \n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/signIn/signIn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=signIn.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Details = /** @class */ (function () {
    //stars: Array<any> = new Array(5);
    function Details(navCtrl, navParams, alertCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.inAppBrowser = inAppBrowser;
        this.food = this.navParams.data;
        alert(this.food);
    }
    Details.prototype.doConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Pay for this?',
            message: 'This will jump to Paypal page',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Pay',
                    handler: function () {
                        console.log('Pay clicked');
                        //this.payItems();
                    }
                }
            ]
        });
        confirm.present();
    };
    Details.prototype.openMaps = function () {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create('https://www.google.com/maps', '_self', options);
        //browser.on('')
    };
    Details = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/details/details.html"*/'<!--\n  Generated template for the Details page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="ionic">\n    <ion-title>{{food.type}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="info">\n    <h2> {{food.type}}</h2>\n    <p>\n      Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}\n    </p>\n  </div>\n\n  <ion-list>\n      <button ion-item block (click)="openMaps()" >\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <h3>Get Directions</h3>\n      </button>\n    \n      <button ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <h3>Reviews</h3>\n      </button>\n    \n      <button ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <h3>Add to Favorites</h3>\n      </button>\n    \n    </ion-list>\n    \n    <button ion-button block (click)="doConfirm()">Pay Now</button>\n  </ion-content>\n  <!--<div class="photos">\n    <h3>Pictures</h3>\n    <ion-scroll scrollX="true">\n      <img [src]="photo.thumbnail" *ngFor="let photo of restaurant.photos; let i=index" tappable (click)="showImage(restaurant.name, restaurant.photos, i)">\n    </ion-scroll>\n  </div>-->\n  \n  <!--\n  <div class="reviews">\n    <h3>Reviews</h3>\n    <p *ngIf="restaurant.reviews.length==0">No reviews yet =(</p>\n    <div *ngIf="restaurant.reviews.length>0">\n      <review *ngFor="let review of restaurant.reviews" [reviewDetails]="review"></review>\n    </div>\n  </div> -->\n'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], Details);
    return Details;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_discover__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__discover_discover__["a" /* DiscoverPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Suggestions" tabIcon="heart" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Discover" tabIcon="brush" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Setting" tabIcon="settings" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//declare var localhost = "192.168.0.103";
//declare var latitude: Number;
//declare var longitude: Number;
var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(navCtrl, camera, http, transfer, geolocation) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.transfer = transfer;
        this.geolocation = geolocation;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.localhost = "128.237.177.21";
        this.fileTransfer = this.transfer.create();
        this.foodId = 0;
        this.geocoder = new google.maps.Geocoder();
        this.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };
    }
    DiscoverPage.prototype.openCamera = function () {
        var _this = this;
        console.log("enter openCamera");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    DiscoverPage.prototype.openGallery = function () {
        var _this = this;
        console.log("enter openGallery");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    DiscoverPage.prototype.uploadImage = function (foodId) {
        /*let options = {
          quality: 100
        };*/
        var options1 = {
            fileKey: 'file',
            fileName: foodId,
            headers: {}
        };
        this.fileTransfer.upload(this.base64Image, 'http://' + this.localhost + ':3000/image', options1)
            .then(function (data) {
            // success
            alert("upload image success");
        }, function (err) {
            // error
            alert("upload image error" + JSON.stringify(err));
        });
    };
    DiscoverPage.prototype.sendData = function () {
        var _this = this;
        this.foodId = this.foodId + 1;
        console.log(this.foodId);
        var food = {
            'type': this.type, 'waitingTime': this.waitingTime,
            'calories': this.calories, 'taste': this.taste,
            'price': this.price, 'image': this.foodId,
            'latitude': this.latitude,
            'longitude': this.longitude,
            'address': this.address
            /*'location': {
              // Place longitude first, then latitude
              'coordinates': [-79.3968307, 43.6656976]
            }*/
        };
        console.log(food);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/food";
        console.log("begin");
        this.http.post(postUrl, this.toparams(food), options)
            .subscribe(function (res) {
            //alert(res.json());
            //this.foodId = res.text();
            _this.uploadImage(_this.foodId);
            alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    DiscoverPage.prototype.getCurrentPosition = function () {
        var _this = this;
        console.log("enter getCurrentPosition");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.geocodelatLng(function (address) {
                _this.address = address;
                _this.sendData();
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert("error for getCurrentPosition" + JSON.stringify(error));
        });
    };
    DiscoverPage.prototype.geocodelatLng = function (callback) {
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var address = results[0].formatted_address;
                console.log(address);
                callback(address);
            }
            else {
                console.log("Geocoding failed: " + status);
            }
        });
    };
    DiscoverPage.prototype.geocodeAddress = function (callback) {
        console.log("enter geocodeAddress");
        //var pos = { address:"", lat:0, long:0};
        this.geocoder.geocode({ 'address': this.address }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                /*pos.address = address;
                pos.lat=Number(latitude);
                pos.long=Number(longitude);*/
                /*this.latitude = Number(latitude);
                this.longitude = Number(longitude);
                console.log(this.latitude);
                console.log(this.longitude);*/
                callback(Number(latitude), Number(longitude));
                //callback(pos);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    DiscoverPage.prototype.storeFood = function () {
        var _this = this;
        if (!this.address)
            this.getCurrentPosition();
        else
            this.geocodeAddress(function (latitude, longitude) {
                _this.latitude = latitude;
                _this.longitude = longitude;
                _this.sendData();
            });
    };
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/discover/discover.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Discover\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="discover-form3">\n    <ion-item [(ngModel)]="address" name="address">        \n      <ion-label> <ion-icon name="locate"></ion-icon></ion-label>\n      <ion-input clearInput type="text" placeholder="Current Location"></ion-input>\n    </ion-item>\n\n    <!--<ion-item id="discover-select3">\n      <ion-label>\n        ChooseImage\n      </ion-label>\n      <ion-select name="ChooseImage" [(ngModel)]="ChooseImage">\n        <ion-option>\n          Open Camera\n        </ion-option>\n        <ion-option>\n          Choose from Gallery\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <button id="discover-button7" ion-button outline color="royal" block (click)="openCamera()">\n      Open Camera\n    </button>\n    <button id="discover-button8" ion-button outline color="royal" block (click)="openGallery()">\n      Open Gallery\n    </button>\n    <img [src]="base64Image"/>\n    <!--<button id="discover-button8" ion-button outline color="royal" block (click)="upLoadImage()">\n      <ion-icon name="camera"></ion-icon>\n      Upload Image\n    </button>-->\n    \n    <ion-item id="discover-select7">\n      <ion-label>\n        Food Type\n      </ion-label>\n      <ion-select [(ngModel)]="type" name="type">\n        <ion-option>\n          🍔hamburger\n        </ion-option>\n        <ion-option>\n          🥗salad\n        </ion-option>\n        <ion-option>\n          🥪sandwich\n        </ion-option>\n        <ion-option>\n          🍟french fries\n        </ion-option>\n        <ion-option>\n          🍣sushi\n        </ion-option>\n        <ion-option>\n          🍲soup\n        </ion-option>\n        <ion-option>\n          🍜noodles\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="discover-range3">\n      <ion-range min="0" max="100" step="1" color="positive" value="50" name="waitingTime" [(ngModel)]="waitingTime">\n        <ion-label range-left>\n          Waiting Time\n        </ion-label>\n      </ion-range>\n    </ion-item>\n\n    <!--<ion-item id="discover-select6">\n      <ion-label>\n        Waiting Time\n      </ion-label>\n      <ion-select [(ngModel)]="WaitingTime" name="WaitingTime">\n        <ion-option>\n          1-5 min\n        </ion-option>\n        <ion-option>\n          6-15 min\n        </ion-option>\n        <ion-option>\n          above 15 min\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!--<ion-item id="discover-select4">\n      <ion-label>\n        Price\n      </ion-label>\n      <ion-select name="Price" [(ngModel)]="Price">\n        <ion-option>\n          $ 0-5\n        </ion-option>\n        <ion-option>\n          $ 5-10\n        </ion-option>\n        <ion-option>\n          $ 10+\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-item id="discover-range4">\n      <ion-range min="0" max="100" step="1" color="positive" value="50" name="Price" [(ngModel)]="price">\n        <ion-label range-left>\n          Price\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="discover-range1">\n      <ion-range min="0" max="100" step="1" color="positive" value="50" name="Taste" [(ngModel)]="taste">\n        <ion-label range-left>\n          Taste\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="discover-range2">\n      <ion-range min="0" max="100" step="1" color="positive" value="50" name="Calories" [(ngModel)]="calories">\n        <ion-label range-left>\n          Healthy Index\n        </ion-label>\n      </ion-range>\n    </ion-item>\n  </form>\n  <button id="discover-button8" ion-button outline color="royal" block (click)="storeFood()">\n    Finish\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/discover/discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  \n</ion-content>\n'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* Details */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* Details */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__["a" /* SignInPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.skipIntroHandler = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map