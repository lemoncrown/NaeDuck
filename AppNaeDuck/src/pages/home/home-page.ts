import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';


@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html',
  providers: [HttpService]
})
export class HomePage {

  pages: Array<{ title: string, component: any, use: string }>;


  parameters: Array<any>;

  devices: string = "select";
  shows: string = "select";
  seats: string = "select";



  //showRawid: number;
  //timeRawid: number = 0;
  //deviceRawid: number;

  startEnable : boolean = false;

  ionicNamedColor: string = "primary";


  public user_data = {
    profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
    name_surname: 'Can Delibas',
    username: 'candelibas',
    website: 'https://github.com/candelibas',
    description: 'Software developer, open-source lover & Invoker spammer',
    email: 'candelibas00@gmail.com',
    phone: '',
    gender: 'male'
  };


  constructor(public navCtrl: NavController
    , private modalController: ModalController
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars

  ) {
    this.pages = [
      { title: 'Log in', component: "LoginFlatPage" , use : 'N'},
      { title: 'Show Title', component: "ShowPage", use: 'N' },
      { title: 'Seat', component: "HallPage", use: 'N' }
      //DetectPage
    ];



    let webServiceUrl = this.environmentProvider.getWebServiceUrl();

  }

  openPage(page) {
   // console.log(this.globalVars.getShowInfo());


    const modal = this.modalController.create(page.component, this.globalVars.getShowInfo());
    modal.onDidDismiss(data => {
      if (data != null) {

        //LoginFlatPage
        if (page.component.toString() === "LoginFlatPage") {
          //this.deviceRawid = data.RAWID;
          //this.selectedSeat = false;
          this.globalVars.setDeviceRawid(data.RAWID);
          page.title = data.ALIAS;  //RAWID KEY

          //reset
          this.globalVars.setShowRawid(0);
          this.globalVars.setTimeRawid(0);
          this.globalVars.setSeatSeq(0);
          this.ionicNamedColor = "light";
          page.title = "Show Title";

        } else if (page.component.toString() === "ShowPage") {
          //this.showRawid = data.SHOW_RAWID;
          //this.timeRawid = data.TIME_RAWID;
          //this.selectedSeat = false;
          this.globalVars.setShowRawid(data.SHOW_RAWID);
          this.globalVars.setTimeRawid(data.TIME_RAWID);
          this.ionicNamedColor = "light";
          page.title = data.TITLE;

          this.globalVars.setSeatSeq(0);
        } else if (page.component.toString() === "HallPage") {
          this.globalVars.setSeatSeq(data.SEQ);

        //  this.selectedSeat = true;
          this.ionicNamedColor = "primary";
          this.seats = data;
          page.title = data.SEAT_NO;
        }

        page.use = "Y";

      } 

    });

    modal.present();

  }

  openPageLogin() {
    this.devices = "select";
    const modal = this.modalController.create("LoginFlatPage");
    modal.onDidDismiss(data => {
      if (data != null) {

        this.startEnable = false;
        this.globalVars.setDeviceRawid(data.RAWID);
        this.devices = data.ALIAS;

        console.log(data);

        this.globalVars.setShowRawid(0);
        this.globalVars.setTimeRawid(0);
        this.globalVars.setSeatSeq(0);

      } else {
        this.devices = "select";
      }

    });

    modal.present();
  }

  openPageShow() {

    const modal = this.modalController.create("ShowPage", this.globalVars.getShowInfo());
    modal.onDidDismiss(data => {
      if (data != null) {

        this.startEnable = false;
        this.globalVars.setShowRawid(data.SHOW_RAWID);
        this.globalVars.setTimeRawid(data.TIME_RAWID);
        this.shows = data.TITLE;

        console.log(data);
        this.globalVars.setSeatSeq(0);
      }

    });

    modal.present();
  }

  openPageHall() {

    const modal = this.modalController.create("HallPage", this.globalVars.getShowInfo());
    modal.onDidDismiss(data => {
      if (data != null) {

        this.startEnable = false;
        this.globalVars.setSeatSeq(data.SEQ);

        console.log(data);
        this.seats = data.SEAT_NO;
      }

    });

    modal.present();
  }


  openPageInspectStart() {


    this.navCtrl.push("InspectPage", this.globalVars.getShowInfo());
  }

  //InspectPage
  openPageCameraStart() {
    this.navCtrl.push("DetectPage", this.globalVars.getShowInfo());
  }

  openPictureList() {
    this.navCtrl.push("PicturePage", this.globalVars.getShowInfo());
  }
}
