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
import { HttpService } from '../../services/http-service';
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
    }
    ForgotpasswordPage.prototype.submit = function () {
        //이메일 보내기
        //DD-1001
        var body = {
            TID: "DD-1003",
            Items: [
                {
                    EMAIL: ""
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log("0");
                console.log(data);
            }
            else {
                console.log("1");
            }
        }, function (err) {
            console.log("2");
        }, function () {
            console.log("3");
        });
        //비밀번호 업데이트
        /*
        let sWhere = "EMAIL = "+ "'a'";
    
        let body = [];
    
        body.push({
          TABLE_NAME: 'MEMBER_MST_CON',
          WHERE: sWhere,
          PASSWORD: 'a12'
    
        });
    
    
    
        this.httpService.PutUpdate(body).subscribe(
          data => {
            if (data != null) {
    
              console.log('OK');
              //this.navCtrl.setRoot(HomePage);
    
            } else {
              // this.showAlert("N", "error");
            }
    
          },
          err => {
          },
          () => {
          }
        );
    
        */
        //this.navCtrl.setRoot(HomePage);
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Component({
        selector: 'page-forgotpassword',
        templateUrl: 'forgotpassword.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        HttpService])
], ForgotpasswordPage);
export { ForgotpasswordPage };
//# sourceMappingURL=forgotpassword.js.map