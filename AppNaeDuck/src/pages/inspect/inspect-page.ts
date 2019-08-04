import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams} from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //Detection API
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions} from '@ionic-native/camera-preview';
import { ToastService } from '../../services/toast-service'

@IonicPage()
@Component({
  selector: 'inspect-page',
  templateUrl: 'inspect-page.html',
  providers: [HttpService, ToastService]
})
export class InspectPage {

  pages: Array<{ title: string, component: any, use: string }>;


  parameters: Array<any>;
  seats: Array<any>;
  devices: Array<any>;

  showRawid: number;
  timeRawid: number;
  deviceRawid: number;
  itemRawid: number;

  smileCount: number=0;
  //operate
  useCamera = false;
  useStartCamera = false;
  startDetect = false;


  //640x480
  //240 / 320

  imageWidth = 240;
  imageHeight = 320;
  imageQuality = 100;
  imagePicture = [];
  images: any;

  ionicNamedColor: string = 'primary';


  detectData: any;

  constructor(public navCtrl: NavController
    , private modalController: ModalController
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars
    , private cameraPreview: CameraPreview
    , private http: HttpClient
    , private alertCtrl: AlertController
    , private navParams: NavParams
  ) {

   
  }

  //test
  ngOnInit() {

  }


  //real
  ngOnInit2() {

    const options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
      toBack: true,
      tapEnabled: false,
      dragEnabled: false,
      alpha: 1
    };

    this.cameraPreview.startCamera(options).then(
      (res) => {
        this.cameraPreview.show();
        this.useStartCamera = true;
      },
      (err) => {
        this.useStartCamera = false;
      });

  }

  ngOnDestroy() {

    this.http = undefined;
    this.cameraPreview.stopCamera();
  }

 
  //[#001] : start camera

  startCameraOnOff() {

    this.takePictures();
  }

  //test
  takePictures() {

    this.callDetectionApi(this.globalVars.getTestImgData());
  }


  //real
  takePictures2() {

   try {

     const pictureOpts: CameraPreviewPictureOptions = {
       width: this.imageWidth,
       height: this.imageHeight,
       quality: this.imageQuality
     }

     let self = this;

     this.cameraPreview.takePicture(pictureOpts).then((data) => {
       self.callDetectionApi(this.globalVars.getTestImgData());

     }, (err) => {
       //errCode : 100
       //alert('err' + err.log);
     });
   } catch (e) {
     //errCode : 101
     //alert('ERROR' + e);
   }

  }


  //test
  callDetectionApi(data) {

    const body = this.base64ToBlob(data);
    const subscriptionKey = this.environmentProvider.getAzureDectetionKey();
    const uriBase = this.environmentProvider.getAzureDectetionUri();

    const options: any = {
      headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', subscriptionKey).append('Content-Type', 'application/octet-stream'),
      responseType: 'json',
      params: new HttpParams().set('returnFaceId', 'true').append('returnFaceLandmarks', 'false').append('returnFaceAttributes', 'age,gender,smile,emotion')
    };

    this.http.post(uriBase, body, options
    ).subscribe(res => {
      this.setDetectionData(data, res); //db insert
    }, (err) => {

    });

  }

  //real
  callDetectionApi2(data) {

    const body = this.base64ToBlob(data);
    const subscriptionKey = this.environmentProvider.getAzureDectetionKey();
    const uriBase = this.environmentProvider.getAzureDectetionUri();
   
    const options: any = {
      headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', subscriptionKey).append('Content-Type', 'application/octet-stream'),
      responseType: 'json',
      params: new HttpParams().set('returnFaceId', 'true').append('returnFaceLandmarks', 'false').append('returnFaceAttributes', 'age,gender,smile,emotion')
    };

    this.http.post(uriBase, body, options
    ).subscribe(res => {
      this.setDetectionData(data, res); //db insert
      }, (err) => {

    });

  }

  setDetectionData(imgData, detectionData) {

    let smileValue: number = 0;
    let ageValue = "";
    let genderValue = "";

    if (detectionData["0"]) {
      if (detectionData["0"].faceId) {
        smileValue = detectionData["0"].faceAttributes.smile;
        ageValue = detectionData["0"].faceAttributes.age;
        genderValue = detectionData["0"].faceAttributes.gender;
      }
    }


    let body = [];
    body.push({
      TABLE_NAME: 'DETECTION_INS_FEA',
      SHOW_RAWID: this.navParams.get('SHOW_RAWID'),
      TIME_RAWID: this.navParams.get('TIME_RAWID'),
      DEVICE_RAWID: this.navParams.get('DEVICE_RAWID'),
      DETECT_DATA: detectionData,
      IMG_DATA: imgData,

    });

    this.httpService.Put(body).subscribe(
      data => {
        if (data != null) {

          if (smileValue > this.environmentProvider.getAzureDectetionValue() ) {
            this.smileCount++;
          }
          this.itemRawid = data;
          this.showAlert("Y", smileValue);
        } else {
          this.showAlert("N", "error");
        }

      },
      err => {
      },
      () => {
      }
    );
  }


  showAlert(check , data) {

    let title = "";
    if (check == "Y") {
      title = "success";
    } else {
      title = "error !!!!!!!";
    }
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: 'smile value : ' +  data,
      buttons: ['OK']
    });
    alert.present();
  }

  //COMMON API
  base64ToBlob(imgData) {
    try {
      var byteString = window.atob(imgData);
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], { type: 'application/octet-stream' });
    } catch (e) {
 
    }
  }


  //-----------------------------------------------------------

  exitPage() {

    const param = {
      RAWID: this.itemRawid,
    };

    const modal = this.modalController.create("InspectItem", param);
    modal.onDidDismiss(data => {
      this.navCtrl.popToRoot();
    });

    modal.present();
  }

}


