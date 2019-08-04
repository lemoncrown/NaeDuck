import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, Loading, ModalController, NavParams, Events, AlertController, ViewController } from 'ionic-angular';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';

@IonicPage()
@Component({
  selector: 'show-page',
  templateUrl: 'show-page.html',
  providers: [HttpService]
})
export class ShowPage {

  //loading: Loading;
  //selectedItem: any;
  //icons: string[];
  items: Array<any>; //datalist

  showImgUrl : string;
  private webServiceUrl: string;

  itemsWeek: Array<{ ID: Number, VALUE: string, WEEK: string, DAY: string }>;
  selected: Number;
  selectedDate: string = '';


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
    this.showImgUrl = this.environmentProvider.getShowImgUrl();
    this.getWeek();
    //this.getData();
  }

  ngOnDestroy() {
  }
  //LIST
  getData() {
    let body = {
      TID: "FES-1000",
      Items: [
        {
          OpenDtts: this.selectedDate 
        }
      ]
    };

    this.httpService.PostFES(body).subscribe(
      data => {
        if (data != null) {
          console.log(data);
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

  getWeek() {
    this.itemsWeek = [];
    for (var i = 0; i < 20; i++) {

      let someDate = new Date(new Date().getTime() + (i * 24 * 60 * 60 * 1000));
      let week = this.globalVars.getWeekDay(someDate);

      var dd = someDate.getDate();
      var mm = someDate.getMonth() + 1; //January is 0!
      var yyyy = someDate.getFullYear();

      var strMM: string = mm.toString();
      var strDD: string = dd.toString();

      if (mm < 10) {
        strMM = '0' + mm.toString();
      }
      if (dd < 10) {
        strDD = '0' + dd.toString();
      }

      var today = yyyy + '-' + strMM + '-' + strDD;


      this.itemsWeek.push({
        ID: i,
        VALUE: today,
        WEEK: week,
        DAY: strDD
      });

      if (i == 0) {
        this.selectedDate = today;
        this.selected = 0;
      }
    }
  }


  onDateChange(date: Number) {

    for (let i = 0; i < this.itemsWeek.length; i++) {
      if (this.itemsWeek[i].ID == date) {
        this.selectedDate = this.itemsWeek[i].VALUE;
        break;
      }
    }

    this.selected = date;
    this.getData();

   // this.getArtListInfo();
    //selectedDate

  }

  onSelect(param) {
    this.view.dismiss(param);
  }

  dismiss() {
    this.view.dismiss();
  }








  getArtListInfo() {


  }


  showLoading() {

  }

  showError(text) {
 
  }



}
