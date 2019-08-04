var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
var LogoutFlat = (function () {
    function LogoutFlat() {
        var _this = this;
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return; //error
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }
    LogoutFlat.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    return LogoutFlat;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogoutFlat.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogoutFlat.prototype, "events", void 0);
LogoutFlat = __decorate([
    IonicPage(),
    Component({
        selector: 'logout-flat',
        templateUrl: 'logout-flat.html'
    }),
    __metadata("design:paramtypes", [])
], LogoutFlat);
export { LogoutFlat };
//# sourceMappingURL=logout-flat.js.map