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
import { StaffinfoPage } from '../staffinfo/staffinfo';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
var FollowupPage = (function () {
    function FollowupPage(navCtrl, navParams, httpService, environmentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.httpImgUrl = "";
        this.MEMBER_RAWID = "";
        this.MEMBER_RAWID = this.navParams.get('MEMBER_RAWID');
        console.log(this.MEMBER_RAWID);
    }
    FollowupPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.getData();
    };
    FollowupPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1008",
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
    FollowupPage.prototype.djinfo = function (param) {
        console.log(param);
        this.navCtrl.push(StaffinfoPage, param);
    };
    return FollowupPage;
}());
FollowupPage = __decorate([
    Component({
        selector: 'page-followup',
        templateUrl: 'followup.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider])
], FollowupPage);
export { FollowupPage };
//# sourceMappingURL=followup.js.map