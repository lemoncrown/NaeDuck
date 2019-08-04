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
import { IonicPage, NavController, LoadingController, ModalController, NavParams, Events, AlertController, ViewController } from 'ionic-angular';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
var ShowPage = (function () {
    function ShowPage(navCtrl, view, events, navParams, httpService, loadingCtrl, modalCtrl, alertCtrl, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.events = events;
        this.navParams = navParams;
        this.httpService = httpService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.selectedDate = '';
    }
    ShowPage.prototype.ngOnInit = function () {
        this.showImgUrl = this.environmentProvider.getShowImgUrl();
        this.getWeek();
        //this.getData();
    };
    ShowPage.prototype.ngOnDestroy = function () {
    };
    //LIST
    ShowPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "FES-1000",
            Items: [
                {
                    OpenDtts: this.selectedDate
                }
            ]
        };
        this.httpService.PostFES(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.items = data;
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ShowPage.prototype.getWeek = function () {
        this.itemsWeek = [];
        for (var i = 0; i < 20; i++) {
            var someDate = new Date(new Date().getTime() + (i * 24 * 60 * 60 * 1000));
            var week = this.globalVars.getWeekDay(someDate);
            var dd = someDate.getDate();
            var mm = someDate.getMonth() + 1; //January is 0!
            var yyyy = someDate.getFullYear();
            var strMM = mm.toString();
            var strDD = dd.toString();
            if (mm < 10) {
                strMM = '0' + mm.toString();
            }
            if (dd < 10) {
                strDD = '0' + dd.toString();
            }
            var today = yyyy + '-' + strMM + '-' + strDD;
            this.itemsWeek.push({
                ID: i,
                VALUE: today,
                WEEK: week,
                DAY: strDD
            });
            if (i == 0) {
                this.selectedDate = today;
                this.selected = 0;
            }
        }
    };
    ShowPage.prototype.onDateChange = function (date) {
        for (var i = 0; i < this.itemsWeek.length; i++) {
            if (this.itemsWeek[i].ID == date) {
                this.selectedDate = this.itemsWeek[i].VALUE;
                break;
            }
        }
        this.selected = date;
        this.getData();
        // this.getArtListInfo();
        //selectedDate
    };
    ShowPage.prototype.onSelect = function (param) {
        this.view.dismiss(param);
    };
    ShowPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ShowPage.prototype.getArtListInfo = function () {
    };
    ShowPage.prototype.showLoading = function () {
    };
    ShowPage.prototype.showError = function (text) {
    };
    return ShowPage;
}());
ShowPage = __decorate([
    IonicPage(),
    Component({
        selector: 'show-page',
        templateUrl: 'show-page.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        ViewController,
        Events,
        NavParams,
        HttpService,
        LoadingController,
        ModalController,
        AlertController,
        EnvironmentProvider,
        GlobalVars])
], ShowPage);
export { ShowPage };
//# sourceMappingURL=show-page.js.map