var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { CameraPreview } from '@ionic-native/camera-preview';
import { ToastService } from '../../services/toast-service';
import { Observable } from 'Rxjs/rx';
import { HomePage } from '../home/home-page';
//import { FilePath } from '@ionic-native/file-path';
//import { Transfer } from '@ionic-native/transfer';
//import { FileUploadOptions } from '@ionic-native/file-transfer';
//import { SimpleTimer } from 'ng2-simple-timer';
var DetectPage = (function () {
    function DetectPage(navCtrl, modalController, httpService
        //, private filePath: FilePath
        //, private transfer: Transfer
        // , private view: ViewController
        , navParams, environmentProvider
        //, private loadingCtrl: LoadingController
        , globalVars
        //, private st: SimpleTimer
        , cameraPreview, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.httpService = httpService;
        this.navParams = navParams;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.cameraPreview = cameraPreview;
        this.http = http;
        this.toastCtrl = toastCtrl;
        //operate
        this.useCamera = false;
        this.useStartCamera = false;
        this.startDetect = false;
        //640x480
        //240 / 320
        this.imageWidth = 480;
        this.imageHeight = 640;
        this.imageQuality = 100;
        this.imagePicture = [];
        this.ionicNamedColor = 'primary';
        this.timeInSeconds = 5;
        this.smileCount = 0;
        this.initTimer();
    }
    //test
    DetectPage.prototype.ngOnInit2 = function () {
        // this.initTimer();
        //this.useStartCamera = true;
    };
    //real
    DetectPage.prototype.ngOnInit = function () {
        //   this.initTimer();
        var _this = this;
        var options = {
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
        this.cameraPreview.startCamera(options).then(function (res) {
            _this.cameraPreview.show();
            _this.useStartCamera = true;
        }, function (err) {
            _this.useStartCamera = false;
        });
    };
    DetectPage.prototype.ngOnDestroy = function () {
        this.stopTimer();
        this.http = undefined;
        this.cameraPreview.stopCamera();
    };
    //[#001] : start camera
    //test
    DetectPage.prototype.startCameraOnOff2 = function () {
        // if (!this.useStartCamera) { return; } // camera on -- confirm
        if (!this.useCamera) {
            this.useCamera = true;
            this.ionicNamedColor = "danger";
            this.startTimer();
        }
        else {
            this.useCamera = false;
            this.ionicNamedColor = "primary";
            this.stopTimer();
        }
    };
    //real
    DetectPage.prototype.startCameraOnOff = function () {
        // if (!this.useStartCamera) { return; } // camera on -- confirm
        if (!this.useCamera) {
            // this.startCamera();
            //this.takePicture();
            // this.startDetect = true;
            this.useCamera = true;
            this.ionicNamedColor = "danger";
            this.startTimer();
            this.cameraPreview.show();
        }
        else {
            // this.cameraPreview.hide();
            // this.cameraPreview.stopCamera();
            // this.startDetect = false;
            this.useCamera = false;
            this.ionicNamedColor = "primary";
            this.stopTimer();
            // this.cameraPreview.hide();
        }
    };
    //test
    DetectPage.prototype.takePictures2 = function () {
        this.callDetectionApi("DDDD");
    };
    //real
    DetectPage.prototype.takePictures = function () {
        try {
            var pictureOpts = {
                width: this.imageWidth,
                height: this.imageHeight,
                quality: this.imageQuality
            };
            var self_1 = this;
            this.cameraPreview.takePicture(pictureOpts).then(function (data) {
                self_1.callDetectionApi(data);
            }, function (err) {
            });
        }
        catch (e) {
        }
    };
    DetectPage.prototype.callDetectionApi = function (data) {
        var _this = this;
        var body = this.base64ToBlob(this.globalVars.getTestImgData());
        //const body = this.base64ToBlob(data);
        var subscriptionKey = this.environmentProvider.getAzureDectetionKey();
        var uriBase = this.environmentProvider.getAzureDectetionUri();
        var options = {
            headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', subscriptionKey).append('Content-Type', 'application/octet-stream'),
            responseType: 'json',
            params: new HttpParams().set('returnFaceId', 'true').append('returnFaceLandmarks', 'false').append('returnFaceAttributes', 'age,gender,smile,emotion')
        };
        this.http.post(uriBase, body, options).subscribe(function (res) {
            _this.setDetectionData(data, res); //db insert
        }, function (err) {
        });
    };
    //test
    DetectPage.prototype.setDetectionData2 = function (imgData, detectionData) {
        var _this = this;
        var smileValue = 0;
        var ageValue = "";
        var genderValue = "";
        if (detectionData["0"]) {
            if (detectionData["0"].faceId) {
                smileValue = detectionData["0"].faceAttributes.smile;
                ageValue = detectionData["0"].faceAttributes.age;
                genderValue = detectionData["0"].faceAttributes.gender;
            }
        }
        var body = [];
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
        this.httpService.Put(body).subscribe(function (data) {
            if (data != null) {
                if (smileValue > _this.environmentProvider.getAzureDectetionValue()) {
                    _this.smileCount++;
                }
            }
        }, function (err) {
        }, function () {
        });
    };
    //real
    DetectPage.prototype.setDetectionData = function (imgData, detectionData) {
        var smileValue = 0;
        var ageValue = "";
        var genderValue = "";
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
    };
    //COMMON API
    DetectPage.prototype.base64ToBlob = function (imgData) {
        try {
            var byteString = window.atob(imgData);
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], { type: 'application/octet-stream' });
        }
        catch (e) {
            //this.showToast('err : base64ToBlob');
        }
    };
    DetectPage.prototype.initTimer = function () {
        this.timer = {
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
    };
    DetectPage.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    DetectPage.prototype.stopTimer = function () {
        this.useStartCamera = false;
        this.timer.hasStarted = false;
        this.timer.runTimer = false;
    };
    DetectPage.prototype.timerTick = function () {
        var _this = this;
        Observable
            .interval(1000)
            .takeWhile(function () { return _this.timer.runTimer; })
            .subscribe(function (value) {
            console.log("Emitted value: " + value);
            _this.takePictures();
        }, function (error) { return console.error(error); }, function () { return console.log('Interval completed'); });
    };
    DetectPage.prototype.openPage = function (page) {
        var _this = this;
        if (this.useCamera == true) {
            this.startCameraOnOff();
        }
        //startCameraOnOff()
        var modal = this.modalController.create("LoginFlatPage");
        modal.onDidDismiss(function (data) {
            if (data != null) {
                if (data.RAWID != null) {
                    _this.navCtrl.push(HomePage);
                }
            }
        });
        modal.present();
    };
    return DetectPage;
}());
DetectPage = __decorate([
    IonicPage(),
    Component({
        selector: 'detect-page',
        templateUrl: 'detect-page.html',
        providers: [HttpService, ToastService]
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        HttpService
        //, private filePath: FilePath
        //, private transfer: Transfer
        // , private view: ViewController
        ,
        NavParams,
        EnvironmentProvider
        //, private loadingCtrl: LoadingController
        ,
        GlobalVars
        //, private st: SimpleTimer
        ,
        CameraPreview,
        HttpClient,
        ToastService])
], DetectPage);
export { DetectPage };
//# sourceMappingURL=detect-page.js.map