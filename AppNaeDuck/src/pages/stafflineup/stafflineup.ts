import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


import { StaffinfoPage } from '../staffinfo/staffinfo';
//ADD
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'page-stafflineup',
  templateUrl: 'stafflineup.html',
  providers: [HttpService]
})
export class StafflineupPage {

  items: Array<any>; //datalist

  httpImgUrl: string = "";
  SHOW_RAWID: string = "";
  constructor(public navCtrl: NavController
    , private navParams: NavParams
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider) {

    //this.SHOW_RAWID = this.navParams.get('SHOW_RAWID');
    console.log(this.navParams.get('param'));

    
  }

  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    this.items = this.navParams.get('param');
  }


   
 djinfo(param) {
   console.log(param);
   this.navCtrl.push(StaffinfoPage, param);
  }

}
