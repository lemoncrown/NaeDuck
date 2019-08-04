import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
import { EventPage } from '../event/event';
import { FollowupPage } from '../follow/followup';

//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';

@Component({
  selector: 'page-staffinfo',
  templateUrl: 'staffinfo.html',
  providers: [HttpService]
})
export class StaffinfoPage {

  items: Array<any>; //datalist

  httpImgUrl: string = "";
  MEMBER_RAWID: string = "";
  AGENT: string = "";
  ALIAS: string = "";
  NAME: string = "";
  IMG_URL: string = "";
  ABOUT: string = "";
  FOLLOW: string = "";


  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars) {

    this.MEMBER_RAWID = this.navParams.get('MEMBER_RAWID');
    this.AGENT = this.navParams.get('AGENT');
    this.ALIAS = this.navParams.get('ALIAS');
    this.NAME = this.navParams.get('NAME');
    this.IMG_URL = this.navParams.get('IMG_URL');
    this.ABOUT = this.navParams.get('ABOUT');
    this.FOLLOW = this.navParams.get('FOLLOW');

  }



  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    this.getData();
  }

  getData() {

    let body = {
      TID: "DD-1006",
      Items: [
        {
          MEMBER_RAWID: this.MEMBER_RAWID
        }
      ]
    };



    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {
          console.log(data);
          this.items = data;

        } else {
          console.log('1');
          //  this.showError('예약정보가 없습니다');
        }

      },
      err => {
        console.log(err);
      },
      () => {
      }
    );

  }

 event() {
    this.navCtrl.push(EventPage);
 }


 eventfollow() {


   let body = [];

   body.push({
     TABLE_NAME: 'SHOW_FOLLOW_DD',
     MEMBER_RAWID: this.MEMBER_RAWID,
     FOLLOW_RAWID: this.globalVars.vars[0].rawid

   });

   this.httpService.Put(body).subscribe(
     data => {
       if (data != null) {

         console.log(data);
        // this.navCtrl.setRoot(HomePage);

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


 followup() {

   let param = {
     MEMBER_RAWID: this.MEMBER_RAWID
   }


   this.navCtrl.push(FollowupPage, param);
 }


}
