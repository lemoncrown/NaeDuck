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
import { NavController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { EvententerPage } from '../allevent/evententer';
var AllEventPage = (function () {
    function AllEventPage(navCtrl, httpService, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.home_tab = "for_you";
    }
    AllEventPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.getData();
    };
    AllEventPage.prototype.ngOnDestroy = function () {
    };
    //LIST
    AllEventPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1009",
            Items: [
                {
                    TODAY: this.globalVars.getToday()
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
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
    AllEventPage.prototype.event = function (param) {
        this.navCtrl.push(EvententerPage, param);
    };
    AllEventPage.prototype.eventgood = function (param) {
        console.log(param);
    };
    return AllEventPage;
}());
AllEventPage = __decorate([
    Component({
        selector: 'page-allevent',
        templateUrl: 'allevent.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        HttpService,
        EnvironmentProvider,
        GlobalVars])
], AllEventPage);
export { AllEventPage };
//# sourceMappingURL=allevent.js.map