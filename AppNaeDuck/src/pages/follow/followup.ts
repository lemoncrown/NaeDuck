import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


import { StaffinfoPage } from '../staffinfo/staffinfo';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'page-followup',
  templateUrl: 'followup.html',
  providers: [HttpService]
})
export class FollowupPage {

  items: Array<any>; //datalist

  httpImgUrl: string = "";
  MEMBER_RAWID: string = "";

  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider) {

    this.MEMBER_RAWID = this.navParams.get('MEMBER_RAWID');
    console.log(this.MEMBER_RAWID);

    
  }

  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    this.getData();
  }


  getData() {

    let body = {
      TID: "DD-1008",
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

   
 djinfo(param) {
   console.log(param);
   this.navCtrl.push(StaffinfoPage, param);
  }

}
