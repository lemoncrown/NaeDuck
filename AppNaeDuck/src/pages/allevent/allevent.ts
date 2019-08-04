import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { EvententerPage } from '../allevent/evententer';


@Component({
  selector: 'page-allevent',
  templateUrl: 'allevent.html',
  providers: [HttpService]
})
export class AllEventPage {

  items: Array<any>; 

  home_tab: string = "for_you";

  httpImgUrl: string;


  constructor(public navCtrl: NavController
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars) {

  }

  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
    this.getData();
  }



  ngOnDestroy() {
  }
  //LIST
  getData() {
    let body = {
      TID: "DD-1009",
      Items: [
        {
          TODAY: this.globalVars.getToday()
        }
      ]
    };

    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {
          this.items = data;

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


  





 

    

  event(param) {
    this.navCtrl.push(EvententerPage, param);
  }

  eventgood(param) {

    console.log(param);
  }
  
  //START
 

}
