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
import { IonicPage, NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
var InspectItem = (function () {
    function InspectItem(navCtrl, modalController, httpService, environmentProvider, globalVars, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    InspectItem.prototype.ngOnInit = function () {
        console.log(this.navParams.get('SHOW_RAWID'));
        this.getData();
    };
    InspectItem.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    InspectItem.prototype.ngOnDestroy = function () {
    };
    //LIST
    InspectItem.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "FES-1004",
            Items: [
                {
                    RAWID: this.navParams.get('RAWID')
                }
            ]
        };
        this.httpService.PostFES(body).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    _this.imgUrl = data[0].IMG_DATA;
                    _this.items = JSON.parse(data[0].DETECT_DATA);
                    if (_this.items[0].faceId) {
                        _this.smile = _this.items[0].faceAttributes.smile;
                        _this.gender = _this.items[0].faceAttributes.gender;
                        _this.age = _this.items[0].faceAttributes.age;
                        _this.anger = _this.items[0].faceAttributes.emotion.anger;
                        _this.contempt = _this.items[0].faceAttributes.emotion.contempt;
                        _this.disgust = _this.items[0].faceAttributes.emotion.disgust;
                        _this.fear = _this.items[0].faceAttributes.emotion.fear;
                        _this.happiness = _this.items[0].faceAttributes.emotion.happiness;
                        _this.neutral = _this.items[0].faceAttributes.emotion.neutral;
                        _this.sadness = _this.items[0].faceAttributes.emotion.sadness;
                        _this.surprise = _this.items[0].faceAttributes.emotion.surprise;
                    }
                    //this.items = data;
                }
            }
        }, function (err) {
        }, function () {
        });
    };
    InspectItem.prototype.dismiss = function () {
        //root page go
        this.viewCtrl.dismiss();
    };
    return InspectItem;
}());
InspectItem = __decorate([
    IonicPage(),
    Component({
        selector: 'inspect-item',
        templateUrl: 'inspect-item.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        HttpService,
        EnvironmentProvider,
        GlobalVars,
        NavParams,
        ViewController])
], InspectItem);
export { InspectItem };
//# sourceMappingURL=inspect-item.js.map