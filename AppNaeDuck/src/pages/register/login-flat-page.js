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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginService } from '../../services/login-service';
import { ToastService } from '../../services/toast-service';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
var LoginFlatPage = (function () {
    function LoginFlatPage(navCtrl, navParams, service, toastCtrl, httpService, viewCtrl, globalVars) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.viewCtrl = viewCtrl;
        this.globalVars = globalVars;
        /*  Todo override this function with your logic
        =================================================*/
        this.onLogin = function (params) {
            _this.getData(params);
            _this.toastCtrl.presentToast('Login Now');
        };
        this.data = this.service.getDataForLoginFlat();
        this.events = {
            "onLogin": this.onLogin
        };
    }
    //LIST
    LoginFlatPage.prototype.getData = function (params) {
        var _this = this;
        var body = {
            TID: "FES-1002",
            Items: [
                {
                    ID: params.username
                }
            ]
        };
        this.httpService.PostFES(body).subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    _this.viewCtrl.dismiss(data[0]);
                }
                else {
                    _this.toastCtrl.presentToast('Invalid user name');
                }
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
        }, function () {
        });
    };
    LoginFlatPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LoginFlatPage;
}());
LoginFlatPage = __decorate([
    IonicPage(),
    Component({
        selector: 'login-flat-page',
        templateUrl: 'login-flat-page.html',
        providers: [
            LoginService, ToastService, HttpService
        ]
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        LoginService, ToastService,
        HttpService,
        ViewController,
        GlobalVars])
], LoginFlatPage);
export { LoginFlatPage };
//# sourceMappingURL=login-flat-page.js.map