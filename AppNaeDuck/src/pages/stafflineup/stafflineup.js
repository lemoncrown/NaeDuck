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
var StafflineupPage = (function () {
    function StafflineupPage(navCtrl, navParams, httpService, environmentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.httpImgUrl = "";
        this.SHOW_RAWID = "";
        //this.SHOW_RAWID = this.navParams.get('SHOW_RAWID');
        console.log(this.navParams.get('param'));
    }
    StafflineupPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.items = this.navParams.get('param');
    };
    StafflineupPage.prototype.djinfo = function (param) {
        console.log(param);
        this.navCtrl.push(StaffinfoPage, param);
    };
    return StafflineupPage;
}());
StafflineupPage = __decorate([
    Component({
        selector: 'page-stafflineup',
        templateUrl: 'stafflineup.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider])
], StafflineupPage);
export { StafflineupPage };
//# sourceMappingURL=stafflineup.js.map