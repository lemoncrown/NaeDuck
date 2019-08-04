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
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //Detection API
import { HttpService } from '../../services/http-service';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { CameraPreview } from '@ionic-native/camera-preview';
import { ToastService } from '../../services/toast-service';
var InspectPage = (function () {
    function InspectPage(navCtrl, modalController, httpService, environmentProvider, globalVars, cameraPreview, http, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.cameraPreview = cameraPreview;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.smileCount = 0;
        //operate
        this.useCamera = false;
        this.useStartCamera = false;
        this.startDetect = false;
        //640x480
        //240 / 320
        this.imageWidth = 240;
        this.imageHeight = 320;
        this.imageQuality = 100;
        this.imagePicture = [];
        this.ionicNamedColor = 'primary';
    }
    //test
    InspectPage.prototype.ngOnInit = function () {
    };
    //real
    InspectPage.prototype.ngOnInit2 = function () {
        var _this = this;
        var options = {
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
        this.cameraPreview.startCamera(options).then(function (res) {
            _this.cameraPreview.show();
            _this.useStartCamera = true;
        }, function (err) {
            _this.useStartCamera = false;
        });
    };
    InspectPage.prototype.ngOnDestroy = function () {
        this.http = undefined;
        this.cameraPreview.stopCamera();
    };
    //[#001] : start camera
    InspectPage.prototype.startCameraOnOff = function () {
        this.takePictures();
    };
    //test
    InspectPage.prototype.takePictures = function () {
        this.callDetectionApi(this.globalVars.getTestImgData());
    };
    //real
    InspectPage.prototype.takePictures2 = function () {
        var _this = this;
        try {
            var pictureOpts = {
                width: this.imageWidth,
                height: this.imageHeight,
                quality: this.imageQuality
            };
            var self_1 = this;
            this.cameraPreview.takePicture(pictureOpts).then(function (data) {
                self_1.callDetectionApi(_this.globalVars.getTestImgData());
            }, function (err) {
                //errCode : 100
                //alert('err' + err.log);
            });
        }
        catch (e) {
            //errCode : 101
            //alert('ERROR' + e);
        }
    };
    //test
    InspectPage.prototype.callDetectionApi = function (data) {
        var _this = this;
        var body = this.base64ToBlob(data);
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
    //real
    InspectPage.prototype.callDetectionApi2 = function (data) {
        var _this = this;
        var body = this.base64ToBlob(data);
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
    InspectPage.prototype.setDetectionData = function (imgData, detectionData) {
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
            TABLE_NAME: 'DETECTION_INS_FEA',
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
                _this.itemRawid = data;
                _this.showAlert("Y", smileValue);
            }
            else {
                _this.showAlert("N", "error");
            }
        }, function (err) {
        }, function () {
        });
    };
    InspectPage.prototype.showAlert = function (check, data) {
        var title = "";
        if (check == "Y") {
            title = "success";
        }
        else {
            title = "error !!!!!!!";
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: 'smile value : ' + data,
            buttons: ['OK']
        });
        alert.present();
    };
    //COMMON API
    InspectPage.prototype.base64ToBlob = function (imgData) {
        try {
            var byteString = window.atob(imgData);
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], { type: 'application/octet-stream' });
        }
        catch (e) {
        }
    };
    //-----------------------------------------------------------
    InspectPage.prototype.exitPage = function () {
        var _this = this;
        var param = {
            RAWID: this.itemRawid,
        };
        var modal = this.modalController.create("InspectItem", param);
        modal.onDidDismiss(function (data) {
            _this.navCtrl.popToRoot();
        });
        modal.present();
    };
    return InspectPage;
}());
InspectPage = __decorate([
    IonicPage(),
    Component({
        selector: 'inspect-page',
        templateUrl: 'inspect-page.html',
        providers: [HttpService, ToastService]
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        HttpService,
        EnvironmentProvider,
        GlobalVars,
        CameraPreview,
        HttpClient,
        AlertController,
        NavParams])
], InspectPage);
export { InspectPage };
//# sourceMappingURL=inspect-page.js.map