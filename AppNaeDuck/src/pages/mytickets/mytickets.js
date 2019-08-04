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
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
var MyticketsPage = (function () {
    function MyticketsPage(navCtrl, navParams, httpService, environmentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.SHOW_RAWID = "";
        this.TITLE = "";
        this.LOCATION = "";
        this.httpImgUrl = "";
        this.SHOW_RAWID = this.navParams.get('SHOW_RAWID');
        this.TITLE = this.navParams.get('TITLE');
        this.LOCATION = this.navParams.get('LOCATION');
        console.log(this.SHOW_RAWID);
    }
    MyticketsPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.getData();
    };
    MyticketsPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1007",
            Items: [
                {
                    SHOW_RAWID: this.SHOW_RAWID
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.items = data[0];
                _this.itemsBox = data[1];
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
    return MyticketsPage;
}());
MyticketsPage = __decorate([
    Component({
        selector: 'page-mytickets',
        templateUrl: 'mytickets.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider])
], MyticketsPage);
export { MyticketsPage };
//# sourceMappingURL=mytickets.js.map