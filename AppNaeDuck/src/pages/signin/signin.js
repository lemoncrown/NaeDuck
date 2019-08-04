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
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
var SigninPage = (function () {
    function SigninPage(navCtrl, httpService, globalVars) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.globalVars = globalVars;
        this.tab = "login";
        this.name = '';
    }
    SigninPage.prototype.forgotpassword = function () {
        this.navCtrl.push(ForgotpasswordPage);
    };
    SigninPage.prototype.login = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.pwd);
        //DD-1001
        var body = {
            TID: "DD-1001",
            Items: [
                {
                    EMAIL: this.email.trim(),
                    PASSWORD: this.pwd.trim()
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                console.log(data[0].RAWID);
                _this.globalVars.setMember(data[0].ALIAS, data[0].EMAIL, data[0].RAWID, data[0].IMG_URL);
                //console.log(this.globalVars.vars[0].rawid);
                _this.navCtrl.setRoot(HomePage);
                /*
                console.log(data[0].RAWID);
                console.log(data);
      
                //cookie
                this.globalVars.setMember(data[0].ALIAS, data[0].EMAIL, data[0].RAWID, data[0].IMG_URL);
      
      
                console.log(this.globalVars.vars[0].rawid);
                */
            }
            else {
                console.log("1");
            }
        }, function (err) {
            console.log("2");
        }, function () {
            console.log("3");
        });
    };
    //회원가입
    SigninPage.prototype.register = function () {
        var _this = this;
        console.log(this.name);
        console.log(this.email);
        console.log(this.pwd);
        if (this.pwd !== this.pwdConfirm) {
            return;
        }
        //PHONE_NUMBER 없을 경우 0 으로 입력하기
        var body = [];
        body.push({
            TABLE_NAME: 'MEMBER_MST_CON',
            ALIAS: this.name.trim(),
            PHONE_NUMBER: '0',
            EMAIL: this.email.trim(),
            PASSWORD: this.pwd.trim()
        });
        this.httpService.Put(body).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                // this.globalVars.setMember(data[0].ALIAS, this.myForm.value["email"].toString().trim(), data[0].RAWID, data[0].IMG_ALIAS, data[0].CUSTOMER_RAWID, data[0].TEACHER, data[0].CUSTOMER_ALIAS);
                _this.navCtrl.setRoot(HomePage);
            }
            else {
                // this.showAlert("N", "error");
            }
        }, function (err) {
        }, function () {
        });
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Component({
        selector: 'page-signin',
        templateUrl: 'signin.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        HttpService,
        GlobalVars])
], SigninPage);
export { SigninPage };
//# sourceMappingURL=signin.js.map