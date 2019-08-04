import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, Loading, ModalController, NavParams, Events, AlertController, ViewController } from 'ionic-angular';
import { HttpService } from '../../../services/http-service';
import { GlobalVars } from '../../../providers/global';
import { EnvironmentProvider } from '../../../providers/environment-provider';


@IonicPage()
@Component({
  selector: 'picture-page',
  templateUrl: 'picture-page.html',
  providers: [HttpService]
})
export class PicturePage {

  //loading: Loading;
  //selectedItem: any;
  //icons: string[];
  items: Array<any>; //datalist
  smileCount : number = 0;
  public profile_segment: string;


 
  constructor(
    private navCtrl: NavController
    , private view: ViewController
    , private events: Events
    , private navParams: NavParams
    , private httpService: HttpService
    , private loadingCtrl: LoadingController
    , private modalCtrl: ModalController
    , private alertCtrl: AlertController
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars

  ) {

  }


  ngOnInit() {
    this.profile_segment = 'grid';
    this.getData();
  }

  ngOnDestroy() {
   
  }
  //LIST
  getData() {
    let body = {
      TID: "FES-1003",
      Items: [
        {
          SHOW_RAWID: 111,
          TIME_RAWID: 222,
          DEVICE_RAWID: 333
        }
      ]
    };

    this.httpService.PostFES(body).subscribe(
      data => {
        if (data != null) {

          console.log(data);
          this.smileCount = data.length;
          this.items = data;
       
   

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
  //  this.view.dismiss();
  }



}
