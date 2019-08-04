var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
var HomePage = (function () {
    function HomePage(navCtrl, modalController, httpService, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.devices = "select";
        this.shows = "select";
        this.seats = "select";
        //showRawid: number;
        //timeRawid: number = 0;
        //deviceRawid: number;
        this.startEnable = false;
        this.ionicNamedColor = "primary";
        this.user_data = {
            profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
            name_surname: 'Can Delibas',
            username: 'candelibas',
            website: 'https://github.com/candelibas',
            description: 'Software developer, open-source lover & Invoker spammer',
            email: 'candelibas00@gmail.com',
            phone: '',
            gender: 'male'
        };
        this.pages = [
            { title: 'Log in', component: "LoginFlatPage", use: 'N' },
            { title: 'Show Title', component: "ShowPage", use: 'N' },
            { title: 'Seat', component: "HallPage", use: 'N' }
            //DetectPage
        ];
        var webServiceUrl = this.environmentProvider.getWebServiceUrl();
    }
    HomePage.prototype.openPage = function (page) {
        // console.log(this.globalVars.getShowInfo());
        var _this = this;
        var modal = this.modalController.create(page.component, this.globalVars.getShowInfo());
        modal.onDidDismiss(function (data) {
            if (data != null) {
                //LoginFlatPage
                if (page.component.toString() === "LoginFlatPage") {
                    //this.deviceRawid = data.RAWID;
                    //this.selectedSeat = false;
                    _this.globalVars.setDeviceRawid(data.RAWID);
                    page.title = data.ALIAS; //RAWID KEY
                    //reset
                    _this.globalVars.setShowRawid(0);
                    _this.globalVars.setTimeRawid(0);
                    _this.globalVars.setSeatSeq(0);
                    _this.ionicNamedColor = "light";
                    page.title = "Show Title";
                }
                else if (page.component.toString() === "ShowPage") {
                    //this.showRawid = data.SHOW_RAWID;
                    //this.timeRawid = data.TIME_RAWID;
                    //this.selectedSeat = false;
                    _this.globalVars.setShowRawid(data.SHOW_RAWID);
                    _this.globalVars.setTimeRawid(data.TIME_RAWID);
                    _this.ionicNamedColor = "light";
                    page.title = data.TITLE;
                    _this.globalVars.setSeatSeq(0);
                }
                else if (page.component.toString() === "HallPage") {
                    _this.globalVars.setSeatSeq(data.SEQ);
                    //  this.selectedSeat = true;
                    _this.ionicNamedColor = "primary";
                    _this.seats = data;
                    page.title = data.SEAT_NO;
                }
                page.use = "Y";
            }
        });
        modal.present();
    };
    HomePage.prototype.openPageLogin = function () {
        var _this = this;
        this.devices = "select";
        var modal = this.modalController.create("LoginFlatPage");
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.startEnable = false;
                _this.globalVars.setDeviceRawid(data.RAWID);
                _this.devices = data.ALIAS;
                console.log(data);
                _this.globalVars.setShowRawid(0);
                _this.globalVars.setTimeRawid(0);
                _this.globalVars.setSeatSeq(0);
            }
            else {
                _this.devices = "select";
            }
        });
        modal.present();
    };
    HomePage.prototype.openPageShow = function () {
        var _this = this;
        var modal = this.modalController.create("ShowPage", this.globalVars.getShowInfo());
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.startEnable = false;
                _this.globalVars.setShowRawid(data.SHOW_RAWID);
                _this.globalVars.setTimeRawid(data.TIME_RAWID);
                _this.shows = data.TITLE;
                console.log(data);
                _this.globalVars.setSeatSeq(0);
            }
        });
        modal.present();
    };
    HomePage.prototype.openPageHall = function () {
        var _this = this;
        var modal = this.modalController.create("HallPage", this.globalVars.getShowInfo());
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.startEnable = false;
                _this.globalVars.setSeatSeq(data.SEQ);
                console.log(data);
                _this.seats = data.SEAT_NO;
            }
        });
        modal.present();
    };
    HomePage.prototype.openPageInspectStart = function () {
        this.navCtrl.push("InspectPage", this.globalVars.getShowInfo());
    };
    //InspectPage
    HomePage.prototype.openPageCameraStart = function () {
        this.navCtrl.push("DetectPage", this.globalVars.getShowInfo());
    };
    HomePage.prototype.openPictureList = function () {
        this.navCtrl.push("PicturePage", this.globalVars.getShowInfo());
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'home-page',
        templateUrl: 'home-page.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        HttpService,
        EnvironmentProvider,
        GlobalVars])
], HomePage);
export { HomePage };
//# sourceMappingURL=home-page.js.map