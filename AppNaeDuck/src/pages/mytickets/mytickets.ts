import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'page-mytickets',
  templateUrl: 'mytickets.html',
  providers: [HttpService]
})
export class MyticketsPage {


  items: Array<any>;
  itemsBox: Array<any>;


  SHOW_RAWID: string = "";
  TITLE: string = "";
  LOCATION: string = "";

  httpImgUrl: string = "";


  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider) {


    this.SHOW_RAWID = this.navParams.get('SHOW_RAWID');
    this.TITLE = this.navParams.get('TITLE');
    this.LOCATION = this.navParams.get('LOCATION');


    console.log(this.SHOW_RAWID);

  }

  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    this.getData();
  }

  getData() {

    let body = {
      TID: "DD-1007",
      Items: [
        {
          SHOW_RAWID: this.SHOW_RAWID
        }
      ]
    };



    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {
          console.log(data);
          this.items = data[0];
          this.itemsBox = data[1]

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

}
