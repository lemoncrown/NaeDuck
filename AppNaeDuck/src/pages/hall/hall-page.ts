import { Component } from "@angular/core";
import { IonicPage, NavController, AlertController, LoadingController, Loading, Events, ToastController, NavParams, ViewController  } from 'ionic-angular';

import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';

//pages
//import { ItemDetectionPage } from '../item/item-detection';
@IonicPage()
@Component({
  selector: 'hall-page',
  templateUrl: 'hall-page.html',
  providers: [HttpService]
})


export class HallPage {

  //init var
  loading: Loading;
  items: Array<any>;
  webServiceUrl: string;

  canCheckout = false;
  seats: Array<any>;
  seatsNo: string;
  alias: string = "";
  canBooking = false;

  constructor(private nav: NavController
    , private httpService: HttpService
    , public navCtrl: NavController
    , private loadingCtrl: LoadingController
    , private alertCtrl: AlertController
    , private viewCtrl: ViewController
    , private navParams: NavParams
    , private toastCtrl: ToastController
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars) {


  }

  ngOnInit() {

    this.getData();
  }

  ngOnDestroy() {
  }

  //LIST
  getData() {
    let body = {
      TID: "FES-1001",
      Items: [
        {
          TIME_RAWID: this.navParams.get('TIME_RAWID')
        }
      ]
    };


    let filter = this.navParams.get('DEVICE_RAWID');

    this.httpService.PostFES(body).subscribe(
      data => {
        if (data != null) {

          this.items = data;

          console.log(data);

          let result = data.filter(function (entry) {
            return entry.DEVICE_RAWID === filter
          });

          if (result != null) {


            if (result.length > 0) {
             
              this.seats = result[0];
              this.alias = result[0].SEAT_NO;
              this.canBooking = true;
           
            }
          
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

  onSelect(item) {
    
    if (item.USE_YN > 0 || this.canBooking) {
      this.showToast();

    } else {
      console.log(item);
      this.seats = item;
      this.seatsNo = item.SEQ;
      this.alias = item.SEAT_NO;
      this.canCheckout = true;
    }

  }

  showToast() {

    const toast = this.toastCtrl.create({
      message: '다른 좌석을 선택해 주세요',
      duration: 2000,
      position: 'top'
    });

    toast.present(toast);
  }


  checkout() {
    var body = [];
    body.push({
      TABLE_NAME: 'SHOW_HALL_FES',
      SHOW_RAWID: this.navParams.get('SHOW_RAWID'),
      TIME_RAWID: this.navParams.get('TIME_RAWID'),
      DEVICE_RAWID: this.navParams.get('DEVICE_RAWID'),
      SEQ: this.seatsNo

    });

    this.httpService.Put(body).subscribe(
      data => {
        if (data != null) {
          console.log(data);
          if (data == 1) {

            this.viewCtrl.dismiss(this.seats);
          } else {
            this.showToast();

          }

        } else {
        }

      },
      err => {
      },
      () => {
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss(this.seats);
  }


}
