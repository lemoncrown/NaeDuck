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
import { HttpService } from '../../../services/http-service';
import { GlobalVars } from '../../../providers/global';
import { EnvironmentProvider } from '../../../providers/environment-provider';
var PicturePage = (function () {
    function PicturePage(navCtrl, view, events, navParams, httpService, loadingCtrl, modalCtrl, alertCtrl, environmentProvider, globalVars) {
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
        this.smileCount = 0;
    }
    PicturePage.prototype.ngOnInit = function () {
        this.profile_segment = 'grid';
        this.getData();
    };
    PicturePage.prototype.ngOnDestroy = function () {
    };
    //LIST
    PicturePage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "FES-1003",
            Items: [
                {
                    SHOW_RAWID: 111,
                    TIME_RAWID: 222,
                    DEVICE_RAWID: 333
                }
            ]
        };
        this.httpService.PostFES(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.smileCount = data.length;
                _this.items = data;
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
        }, function () {
        });
    };
    PicturePage.prototype.dismiss = function () {
        //  this.view.dismiss();
    };
    return PicturePage;
}());
PicturePage = __decorate([
    IonicPage(),
    Component({
        selector: 'picture-page',
        templateUrl: 'picture-page.html',
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
], PicturePage);
export { PicturePage };
//# sourceMappingURL=picture-page.js.map