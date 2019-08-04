import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoginService } from '../../services/login-service';
import { ToastService } from '../../services/toast-service'
import { HttpService } from '../../services/http-service';


@IonicPage()
@Component({
  selector: 'logout-flat-page',
  templateUrl: 'logout-flat-page.html',
  providers: [
    LoginService, ToastService,HttpService
  ]
})
export class LogoutFlatPage {

  /*  Necessary data and events
      ================================*/
  data : {};
  events: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: LoginService, private toastCtrl: ToastService
    , private httpService: HttpService
    , private viewCtrl: ViewController) {
    this.data = this.service.getDataForLoginFlat();
    this.events =  {
      "onLogin" : this.onLogin
    }
  }

  /*  Todo override this function with your logic
  =================================================*/
  onLogin = (params): void => {
    this.getData(params);
    this.toastCtrl.presentToast('Login Now');
  }

  //LIST
  getData(params) {
    let body = {
      TID: "FES-1002",
      Items: [
        {
          ID: params.username
        }
      ]
    };

    this.httpService.PostFES(body).subscribe(
      data => {
        if (data != null) {

          if (data.length > 0) {
            this.viewCtrl.dismiss(data[0]);
          } else {
            this.toastCtrl.presentToast('Invalid user name');
          }

       

        } else {
          //  this.showError('예약정보가 없습니다');
        }

      },
      err => {
      },
      () => {
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
