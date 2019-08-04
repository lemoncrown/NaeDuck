import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController} from 'ionic-angular';

import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';


@IonicPage()
@Component({
  selector: 'inspect-item',
  templateUrl: 'inspect-item.html',
  providers: [HttpService]
})
export class InspectItem {

  pages: Array<{ title: string, component: any, use: string }>;


  items: Array<any>;
  public imgUrl: string;

  public smile: number;
  public gender: number;
  public age: number;
  public anger: number;
  public contempt: number;
  public disgust: number;
  public fear: number;
  public happiness: number;
  public neutral: number;
  public sadness: number;
  public surprise: number;

 

  constructor(public navCtrl: NavController
    , private modalController: ModalController
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars
    , private navParams: NavParams
    , private viewCtrl: ViewController
  ) {



  }

  ngOnInit() {
    console.log(this.navParams.get('SHOW_RAWID'));
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }


  ngOnDestroy() {

  }

  //LIST
  getData() {
    let body = {
      TID: "FES-1004",
      Items: [
        {
          RAWID: this.navParams.get('RAWID')
        }
      ]
    };

    this.httpService.PostFES(body).subscribe(
      data => {
        if (data != null) {

          if (data.length > 0) {

            this.imgUrl = data[0].IMG_DATA;
            this.items = JSON.parse(data[0].DETECT_DATA);

      
            if (this.items[0].faceId) {

              this.smile = this.items[0].faceAttributes.smile;
              this.gender = this.items[0].faceAttributes.gender;
              this.age = this.items[0].faceAttributes.age;
              this.anger = this.items[0].faceAttributes.emotion.anger;
              this.contempt = this.items[0].faceAttributes.emotion.contempt;
              this.disgust = this.items[0].faceAttributes.emotion.disgust;
              this.fear = this.items[0].faceAttributes.emotion.fear;
              this.happiness = this.items[0].faceAttributes.emotion.happiness;
              this.neutral = this.items[0].faceAttributes.emotion.neutral;
              this.sadness = this.items[0].faceAttributes.emotion.sadness;
              this.surprise = this.items[0].faceAttributes.emotion.surprise;

            }
            //this.items = data;

          }

        }
      },
      err => {
      },
      () => {
      }
    );
  }
 

  dismiss() {
    //root page go
    this.viewCtrl.dismiss();
  }

}


