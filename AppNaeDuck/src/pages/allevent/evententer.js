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
import { DjinfoPage } from '../djinfo/djinfo';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
var EvententerPage = (function () {
    function EvententerPage(navCtrl, navParams, httpService, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.EVENT_RAWID = this.navParams.get('EVENT_RAWID');
        console.log(this.EVENT_RAWID);
    }
    EvententerPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        //this.getData();
    };
    EvententerPage.prototype.djinfo = function () {
        this.navCtrl.push(DjinfoPage);
    };
    return EvententerPage;
}());
EvententerPage = __decorate([
    Component({
        selector: 'page-evententer',
        templateUrl: 'evententer.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider,
        GlobalVars])
], EvententerPage);
export { EvententerPage };
//# sourceMappingURL=evententer.js.map