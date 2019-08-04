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
var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage.prototype.reset = function () {
        this.faqExpand1 = false;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
        this.faqExpand6 = false;
        this.faqExpand7 = false;
        this.faqExpand8 = false;
    };
    HelpPage.prototype.faqExpandToggle1 = function () {
        this.reset();
        this.faqExpand1 = !this.faqExpand1;
    };
    HelpPage.prototype.faqExpandToggle2 = function () {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    };
    HelpPage.prototype.faqExpandToggle3 = function () {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    };
    HelpPage.prototype.faqExpandToggle4 = function () {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    };
    HelpPage.prototype.faqExpandToggle5 = function () {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    };
    HelpPage.prototype.faqExpandToggle6 = function () {
        this.reset();
        this.faqExpand6 = !this.faqExpand6;
    };
    HelpPage.prototype.faqExpandToggle7 = function () {
        this.reset();
        this.faqExpand7 = !this.faqExpand7;
    };
    HelpPage.prototype.faqExpandToggle8 = function () {
        this.reset();
        this.faqExpand8 = !this.faqExpand8;
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Component({
        selector: 'page-help',
        templateUrl: 'help.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HelpPage);
export { HelpPage };
//# sourceMappingURL=help.js.map