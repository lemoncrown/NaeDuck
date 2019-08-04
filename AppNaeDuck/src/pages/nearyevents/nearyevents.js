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
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
var NearyeventsPage = (function () {
    function NearyeventsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab = "today";
        this.homeIcon1 = false;
        this.homeIcon2 = false;
        this.homeIcon3 = false;
    }
    NearyeventsPage.prototype.event = function () {
        this.navCtrl.push(EventPage);
    };
    NearyeventsPage.prototype.toggleHomeIcon1 = function () {
        this.homeIcon1 = !this.homeIcon1;
    };
    NearyeventsPage.prototype.toggleHomeIcon2 = function () {
        this.homeIcon2 = !this.homeIcon2;
    };
    NearyeventsPage.prototype.toggleHomeIcon3 = function () {
        this.homeIcon3 = !this.homeIcon3;
    };
    return NearyeventsPage;
}());
NearyeventsPage = __decorate([
    Component({
        selector: 'page-nearyevents',
        templateUrl: 'nearyevents.html'
    }),
    __metadata("design:paramtypes", [NavController])
], NearyeventsPage);
export { NearyeventsPage };
//# sourceMappingURL=nearyevents.js.map