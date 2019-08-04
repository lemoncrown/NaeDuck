import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams} from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions} from '@ionic-native/camera-preview';
import { ToastService } from '../../services/toast-service'

import { Observable } from 'Rxjs/rx';
import { HomePage } from '../home/home-page';


//import { FilePath } from '@ionic-native/file-path';
//import { Transfer } from '@ionic-native/transfer';
//import { FileUploadOptions } from '@ionic-native/file-transfer';


//import { SimpleTimer } from 'ng2-simple-timer';

@IonicPage()
@Component({
  selector: 'detect-page',
  templateUrl: 'detect-page.html',
  providers: [HttpService, ToastService]
})
export class DetectPage {

  pages: Array<{ title: string, component: any, use: string }>;


  parameters: Array<any>;
  seats: Array<any>;
  devices: Array<any>;

  showRawid: number;
  timeRawid: number;
  deviceRawid: number;

  //operate
  useCamera = false;
  useStartCamera = false;
  startDetect = false;


  //640x480
  //240 / 320

  imageWidth = 480;
  imageHeight = 640;
  imageQuality = 100;
  imagePicture = [];
  images: any;

  ionicNamedColor: string = 'primary';

  //timer
  timer: CountdownTimer;
  timeInSeconds: number = 5;
  smileCount: number = 0;


  detectData: any;

  constructor(public navCtrl: NavController
    , private modalController: ModalController
    , private httpService: HttpService
    //, private filePath: FilePath
    //, private transfer: Transfer

   // , private view: ViewController
   
    , private navParams: NavParams
    , private environmentProvider: EnvironmentProvider
    //, private loadingCtrl: LoadingController
    , private globalVars: GlobalVars
    //, private st: SimpleTimer
    , private cameraPreview: CameraPreview
    , private http: HttpClient
    , private toastCtrl: ToastService
  ) {
    this.initTimer();
  }

  //test
  ngOnInit2() {
   // this.initTimer();
    //this.useStartCamera = true;
  }

  //real
  ngOnInit() {

 //   this.initTimer();

    let options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      //height: 100,
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

    this.stopTimer();
 
    this.http = undefined;

  
    this.cameraPreview.stopCamera();

  }

 
  //[#001] : start camera

  //test
  startCameraOnOff2() {
   // if (!this.useStartCamera) { return; } // camera on -- confirm
    if (!this.useCamera) {
      this.useCamera = true;
      this.ionicNamedColor = "danger";
      this.startTimer();
    } else {
      this.useCamera = false;
      this.ionicNamedColor = "primary";
      this.stopTimer();
    }

  }

  //real
  startCameraOnOff() {
    // if (!this.useStartCamera) { return; } // camera on -- confirm
    if (!this.useCamera) {
      // this.startCamera();
      //this.takePicture();
      // this.startDetect = true;
      this.useCamera = true;
      this.ionicNamedColor = "danger";
      this.startTimer();
      this.cameraPreview.show();
    } else {
      // this.cameraPreview.hide();
      // this.cameraPreview.stopCamera();
      // this.startDetect = false;
      this.useCamera = false;
      this.ionicNamedColor = "primary";
      this.stopTimer();
      // this.cameraPreview.hide();
    }

  }



  //test
  takePictures2() {
    this.callDetectionApi("DDDD");

  }

  //real
  takePictures() {

   try {
     const pictureOpts: CameraPreviewPictureOptions = {
       width: this.imageWidth,
       height: this.imageHeight,
       quality: this.imageQuality
     }

     let self = this;

     this.cameraPreview.takePicture(pictureOpts).then((data) => {
       self.callDetectionApi(data);
     }, (err) => {

     });
   } catch (e) {
   }
  
  }


  callDetectionApi(data) {

    const body = this.base64ToBlob(this.globalVars.getTestImgData());
    //const body = this.base64ToBlob(data);
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

  //test
  setDetectionData2(imgData, detectionData) {


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
      TABLE_NAME: 'DETECTION_MST_FEA',
      SMILE: smileValue,
      AGE: ageValue,
      GENDER: genderValue,
      SHOW_RAWID: this.navParams.get('SHOW_RAWID'),
      TIME_RAWID: this.navParams.get('TIME_RAWID'),
      DEVICE_RAWID: this.navParams.get('DEVICE_RAWID'),
      DETECT_DATA: detectionData,
      IMG_DATA: imgData,

    });

    this.httpService.Put(body).subscribe(
      data => {
        if (data != null) {
          if (smileValue > this.environmentProvider.getAzureDectetionValue()) {
            this.smileCount++;
          }
        } 
      },
      err => {
      },
      () => {
      }
    );
  }

  //real
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


    if (smileValue > this.environmentProvider.getAzureDectetionValue()) {
      this.smileCount++;
    }

    /*
    let body = [];
    body.push({
      TABLE_NAME: 'DETECTION_MST_FEA',
      SMILE: smileValue,
      AGE: ageValue,
      GENDER: genderValue,
      SHOW_RAWID: this.navParams.get('SHOW_RAWID'),
      TIME_RAWID: this.navParams.get('TIME_RAWID'),
      DEVICE_RAWID: this.navParams.get('DEVICE_RAWID'),
      DETECT_DATA: detectionData,
      IMG_DATA: imgData,

    });

    this.httpService.PutCommon(body).subscribe(
      data => {
        if (data != null) {
          if (smileValue > this.environmentProvider.getAzureDectetionValue()) {
            this.smileCount++;
          }
        }
      },
      err => {
      },
      () => {
      }
    );
    */
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
      //this.showToast('err : base64ToBlob');
    }
  }

  initTimer() {
    this.timer = <CountdownTimer>{
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();

  }

  stopTimer() {
    this.useStartCamera = false;
    this.timer.hasStarted = false;
    this.timer.runTimer = false;
 

  }


  timerTick() {
    Observable
      .interval(1000)
      .takeWhile(() => this.timer.runTimer)
      .subscribe(
        (value) => {
          console.log(`Emitted value: ${value}`);
          this.takePictures();
        },
        (error) => console.error(error),
        () => console.log('Interval completed')
      );  

  }
  
  openPage(page) {

    if (this.useCamera == true) {
      this.startCameraOnOff();
    }

    //startCameraOnOff()
    const modal = this.modalController.create("LoginFlatPage");
    modal.onDidDismiss(data => {
      if (data != null) {

        if (data.RAWID != null) {
 
          this.navCtrl.push(HomePage);
        }

      }

    });

    modal.present();

  }




}


export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}
