var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { IonicPage, NavController, AlertController, LoadingController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
//pages
//import { ItemDetectionPage } from '../item/item-detection';
var HallPage = (function () {
    function HallPage(nav, httpService, navCtrl, loadingCtrl, alertCtrl, viewCtrl, navParams, toastCtrl, environmentProvider, globalVars) {
        this.nav = nav;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.canCheckout = false;
        this.alias = "";
        this.canBooking = false;
    }
    HallPage.prototype.ngOnInit = function () {
        this.getData();
    };
    HallPage.prototype.ngOnDestroy = function () {
    };
    //LIST
    HallPage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "FES-1001",
            Items: [
                {
                    TIME_RAWID: this.navParams.get('TIME_RAWID')
                }
            ]
        };
        var filter = this.navParams.get('DEVICE_RAWID');
        this.httpService.PostFES(body).subscribe(function (data) {
            if (data != null) {
                _this.items = data;
                console.log(data);
                var result = data.filter(function (entry) {
                    return entry.DEVICE_RAWID === filter;
                });
                if (result != null) {
                    if (result.length > 0) {
                        _this.seats = result[0];
                        _this.alias = result[0].SEAT_NO;
                        _this.canBooking = true;
                    }
                }
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
        }, function () {
        });
    };
    HallPage.prototype.onSelect = function (item) {
        if (item.USE_YN > 0 || this.canBooking) {
            this.showToast();
        }
        else {
            console.log(item);
            this.seats = item;
            this.seatsNo = item.SEQ;
            this.alias = item.SEAT_NO;
            this.canCheckout = true;
        }
    };
    HallPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: '다른 좌석을 선택해 주세요',
            duration: 2000,
            position: 'top'
        });
        toast.present(toast);
    };
    HallPage.prototype.checkout = function () {
        var _this = this;
        var body = [];
        body.push({
            TABLE_NAME: 'SHOW_HALL_FES',
            SHOW_RAWID: this.navParams.get('SHOW_RAWID'),
            TIME_RAWID: this.navParams.get('TIME_RAWID'),
            DEVICE_RAWID: this.navParams.get('DEVICE_RAWID'),
            SEQ: this.seatsNo
        });
        this.httpService.Put(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                if (data == 1) {
                    _this.viewCtrl.dismiss(_this.seats);
                }
                else {
                    _this.showToast();
                }
            }
            else {
            }
        }, function (err) {
        }, function () {
        });
    };
    HallPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.seats);
    };
    return HallPage;
}());
HallPage = __decorate([
    IonicPage(),
    Component({
        selector: 'hall-page',
        templateUrl: 'hall-page.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        HttpService,
        NavController,
        LoadingController,
        AlertController,
        ViewController,
        NavParams,
        ToastController,
        EnvironmentProvider,
        GlobalVars])
], HallPage);
export { HallPage };
//# sourceMappingURL=hall-page.js.map