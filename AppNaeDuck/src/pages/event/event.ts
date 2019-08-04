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



@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
  providers: [HttpService]
})
export class EventPage {

  items: Array<any>;
  itemsTime: Array<any>; 

  RAWID: string = "";
  TITLE: string = "";
  LOCATION: string = "";
  START: string = "";
  FINISH: string = "";
  START_TIME: string = "";
  FINISH_TIME: string = "";
  COST: string = "";
  POSTER: string = "";
  URL: string = "";

  httpImgUrl: string = "";
  httpYoutubeUrl: string = "";
  youtubeUrl: string = "";
  

  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider) {

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



  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();

 
    this.httpYoutubeUrl = this.environmentProvider.getyoutubeUrl();
    this.youtubeUrl = this.httpYoutubeUrl + '/' + this.URL.toString().trim() + '?rel=0'; 
    this.getData();
  }


  getData() {

    let body = {
      TID: "DD-1005",
      Items: [
        {
          SHOW_RAWID: this.RAWID
        }
      ]
    };

    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {
          console.log(data);
          this.items = data[0];
          this.itemsTime = data[1];

        } else {
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



  djinfo() {
    this.navCtrl.push(DjinfoPage);
  }
  stafflineup() {

    /*
    let param = {
      SHOW_RAWID: this.RAWID
    }


    this.navCtrl.push(StafflineupPage, param);
    */

    this.navCtrl.push(StafflineupPage, { param: this.items });

  }
  selectseats() {
    //this.navCtrl.push(SelectseatsPage);

    let param = {
      SHOW_RAWID: this.RAWID,
      TITLE: this.TITLE,
      LOCATION: this.LOCATION
    }


    console.log(param);

    this.navCtrl.push(MyticketsPage, param);
  }

}
