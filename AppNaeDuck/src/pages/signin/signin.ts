import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [HttpService]
})
export class SigninPage {
  tab: string = "login";

  public username: string;
  public useremail: string;
  public password: string;
  public pwdConfirm: string;

  


  public name: string = '';
  public email: string;
  public pwd: string;


  constructor(public navCtrl: NavController
    , private httpService: HttpService
    , private globalVars: GlobalVars) {

  }

  forgotpassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }
  login() {

    console.log(this.email);
    console.log(this.pwd);


    //DD-1001
    let body = {
      TID: "DD-1001",
      Items: [
        {
          EMAIL: this.email.trim(),
          PASSWORD: this.pwd.trim()
        }
      ]
    };


    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {


          console.log(data);
          console.log(data[0].RAWID);

          this.globalVars.setMember(data[0].ALIAS, data[0].EMAIL, data[0].RAWID, data[0].IMG_URL);

          //console.log(this.globalVars.vars[0].rawid);

          this.navCtrl.setRoot(HomePage);


          /*
          console.log(data[0].RAWID);
          console.log(data);

          //cookie
          this.globalVars.setMember(data[0].ALIAS, data[0].EMAIL, data[0].RAWID, data[0].IMG_URL);


          console.log(this.globalVars.vars[0].rawid);
          */
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
  }



  //회원가입
  register() {

    console.log(this.name);
    console.log(this.email);
    console.log(this.pwd);


    if (this.pwd !== this.pwdConfirm) {
      return;
    }


    //PHONE_NUMBER 없을 경우 0 으로 입력하기
    let body = [];

    body.push({
      TABLE_NAME: 'MEMBER_MST_CON',
      ALIAS: this.name.trim(),
      PHONE_NUMBER: '0',  //
      EMAIL: this.email.trim(),
      PASSWORD: this.pwd.trim()

    });



    this.httpService.Put(body).subscribe(
      data => {
        if (data != null) {

          console.log(data);
         // this.globalVars.setMember(data[0].ALIAS, this.myForm.value["email"].toString().trim(), data[0].RAWID, data[0].IMG_ALIAS, data[0].CUSTOMER_RAWID, data[0].TEACHER, data[0].CUSTOMER_ALIAS);

          this.navCtrl.setRoot(HomePage);

        } else {
          // this.showAlert("N", "error");
        }

      },
      err => {
      },
      () => {
      }
    );



  }

}
