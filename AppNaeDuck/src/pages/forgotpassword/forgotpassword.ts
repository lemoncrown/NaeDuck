import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../services/http-service';


import { HomePage } from '../home/home';
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
  providers: [HttpService]

})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController
    , private httpService: HttpService) {

  }

  submit() {

    //이메일 보내기
    //DD-1001
    let body = {
      TID: "DD-1003",
      Items: [
        {
          EMAIL: ""
        }
      ]
    };


    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {

          console.log("0");
          console.log(data);

        } else {
          console.log("1");
        }

      },
      err => {
        console.log("2");
      },
      () => {

        console.log("3");
      }
    );




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
  }

}
