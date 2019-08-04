var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = {
            "duration": 1000,
            "position": "buttom"
        };
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    return ToastService;
}());
ToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToastController])
], ToastService);
export { ToastService };
//# sourceMappingURL=toast-service.js.map