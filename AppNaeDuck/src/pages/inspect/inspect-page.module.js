var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectPage } from './inspect-page';
//import { FilePath } from '@ionic-native/file-path';
//import { Transfer } from '@ionic-native/transfer';
import { CameraPreview } from '@ionic-native/camera-preview';
import { HttpClient } from '@angular/common/http';
var InspectPageModule = (function () {
    function InspectPageModule() {
    }
    return InspectPageModule;
}());
InspectPageModule = __decorate([
    NgModule({
        declarations: [
            InspectPage
        ],
        imports: [
            IonicPageModule.forChild(InspectPage)
        ],
        providers: [
            // FilePath,
            //Transfer,
            CameraPreview,
            HttpClient
        ]
    })
], InspectPageModule);
export { InspectPageModule };
//# sourceMappingURL=inspect-page.module.js.map