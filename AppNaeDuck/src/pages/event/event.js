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
//import { SelectseatsPage } from '../selectseats/selectseats';
//import { DjlineupPage } from '../djlineup/djlineup';
import { MyticketsPage } from '../mytickets/mytickets';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { StafflineupPage } from '../stafflineup/stafflineup';
var EventPage = (function () {
    function EventPage(navCtrl, navParams, httpService, environmentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.RAWID = "";
        this.TITLE = "";
        this.LOCATION = "";
        this.START = "";
        this.FINISH = "";
        this.START_TIME = "";
        this.FINISH_TIME = "";
        this.COST = "";
        this.POSTER = "";
        this.URL = "";
        this.httpImgUrl = "";
        this.httpYoutubeUrl = "";
        this.youtubeUrl = "";
        this.RAWID = this.navParams.get('RAWID');
        this.TITLE = this.navParams.get('TITLE');
        this.LOCATION = this.navParams.get('LOCATION');
        this.START = this.navParams.get('START');
        this.FINISH = this.navParams.get('FINISH');
        this.START_TIME = this.navParams.get('START_TIME');
        this.FINISH_TIME = this.navParams.get('FINISH_TIME');
        this.COST = this.navParams.get('COST');
        this.POSTER = this.navParams.get('POSTER');
        this.URL = this.navParams.get('URL');
    }
    EventPage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        this.httpYoutubeUrl = this.environmentProvider.getyoutubeUrl();
        this.youtubeUrl = this.httpYoutubeUrl + '/' + this.URL.toString().trim() + '?rel=0';
        this.getData();
    };
    EventPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1005",
            Items: [
                {
                    SHOW_RAWID: this.RAWID
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.items = data[0];
                _this.itemsTime = data[1];
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EventPage.prototype.djinfo = function () {
        this.navCtrl.push(DjinfoPage);
    };
    EventPage.prototype.stafflineup = function () {
        /*
        let param = {
          SHOW_RAWID: this.RAWID
        }
    
    
        this.navCtrl.push(StafflineupPage, param);
        */
        this.navCtrl.push(StafflineupPage, { param: this.items });
    };
    EventPage.prototype.selectseats = function () {
        //this.navCtrl.push(SelectseatsPage);
        var param = {
            SHOW_RAWID: this.RAWID,
            TITLE: this.TITLE,
            LOCATION: this.LOCATION
        };
        console.log(param);
        this.navCtrl.push(MyticketsPage, param);
    };
    return EventPage;
}());
EventPage = __decorate([
    Component({
        selector: 'page-event',
        templateUrl: 'event.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        HttpService,
        EnvironmentProvider])
], EventPage);
export { EventPage };
//# sourceMappingURL=event.js.map