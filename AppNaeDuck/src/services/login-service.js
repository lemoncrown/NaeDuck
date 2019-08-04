var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var LoginService = (function () {
    function LoginService() {
        /*  Login Universal Data
        ==============================*/
        this.getDataForLoginFlat = function () {
            var data = {
                "logo": "assets/images/csform-logo.png",
                "btnLogin": "Login",
                "txtUsername": "Username",
                "txtPassword": "Password",
                "txtForgotPassword": "Forgot password?",
                "btnResetYourPassword": "Reset your password",
                "txtSignupnow": "Don't have an account?",
                "btnSignupnow": "Signup now",
                "title": "Welcome back,",
                "subtitle": "please login to your account.",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
            return data;
        };
    }
    return LoginService;
}());
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], LoginService);
export { LoginService };
//# sourceMappingURL=login-service.js.map