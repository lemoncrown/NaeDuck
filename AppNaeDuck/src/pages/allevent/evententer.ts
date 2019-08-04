import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DjinfoPage } from '../djinfo/djinfo';

//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';

@Component({
  selector: 'page-evententer',
  templateUrl: 'evententer.html'
})
export class EvententerPage {


  httpImgUrl: string;
  EVENT_RAWID: string;

  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars) {

    this.EVENT_RAWID = this.navParams.get('EVENT_RAWID');
 
    console.log(this.EVENT_RAWID);
  }



  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    //this.getData();
  }
   
 djinfo() {
    this.navCtrl.push(DjinfoPage);
  }

}
