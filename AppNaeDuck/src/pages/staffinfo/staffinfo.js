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
import { NavController, NavParams } from 'ionic-angular';
import { EventPage } from '../event/event';
import { FollowupPage } from '../follow/followup';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
var StaffinfoPage = (function () {
    function StaffinfoPage(navCtrl, navParams, httpService, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.httpImgUrl = "";
        this.MEMBER_RAWID = "";
        this.AGENT = "";
        this.ALIAS = "";
        this.NAME = "";
        this.IMG_URL = "";
        this.ABOUT = "";
        this.FOLLOW = "";
        this.MEMBER_RAWID = this.navParams.get('MEMBER_RAWID');
        this.AGENT = this.navParams.get('AGENT');
        this.ALIAS = this.navParams.get('ALIAS');
        this.NAME = this.navParams.get('NAME');
        this.IMG_URL = this.navParams.get('IMG_URL');
        this.ABOUT = this.navParams.get('ABOUT');
        this.FOLLOW = this.navParams.get('FOLLOW');
    }
    StaffinfoPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.getData();
    };
    StaffinfoPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1006",
            Items: [
                {
                    MEMBER_RAWID: this.MEMBER_RAWID
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.items = data;
            }
            else {
                console.log('1');
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    StaffinfoPage.prototype.event = function () {
        this.navCtrl.push(EventPage);
    };
    StaffinfoPage.prototype.eventfollow = function () {
        var body = [];
        body.push({
            TABLE_NAME: 'SHOW_FOLLOW_DD',
            MEMBER_RAWID: this.MEMBER_RAWID,
            FOLLOW_RAWID: this.globalVars.vars[0].rawid
        });
        this.httpService.Put(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                // this.navCtrl.setRoot(HomePage);
            }
            else {
                // this.showAlert("N", "error");
            }
        }, function (err) {
        }, function () {
        });
    };
    StaffinfoPage.prototype.followup = function () {
        var param = {
            MEMBER_RAWID: this.MEMBER_RAWID
        };
        this.navCtrl.push(FollowupPage, param);
    };
    return StaffinfoPage;
}());
StaffinfoPage = __decorate([
    Component({
        selector: 'page-staffinfo',
        templateUrl: 'staffinfo.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider,
        GlobalVars])
], StaffinfoPage);
export { StaffinfoPage };
//# sourceMappingURL=staffinfo.js.map