var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { EnvironmentProvider } from '../providers/environment-provider';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
var HttpService = (function () {
    function HttpService(environmentProvider, http) {
        this.environmentProvider = environmentProvider;
        this.http = http;
        this.httpUrl = '';
        this.headers = new Headers();
        this.httpUrl = this.environmentProvider.getHttpUrl();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        this.headers.append("Access-Control-Allow-Credentials", "true");
        this.headers.append('Accept', 'application/json');
        this.headers.append('content-type', 'application/json');
        //  this.headers.append('content-length', '3000000');   application/x-www-form-urlencoded
        //content-length: 3000000
        // this.headers.append('response-Type', 'text'); //error add
    }
    //FES
    HttpService.prototype.PostFES = function (body) {
        var path = '/FES/POST';
        var url = this.httpUrl + path;
        var options = new RequestOptions({ headers: this.headers });
        var response = this.http.post(url, body, options).map(function (res) { return res.json(); });
        return response;
        //return response;
        /*
        let options = new RequestOptions({ headers: this.headers });
    
        var response = this.http.post(url, body, options).map(res => res.json());
  
        return response;
        */
    };
    HttpService.prototype.Post = function (body) {
        var path = '/DD/POST'; //Controllers/DDController.cs 호출하기
        var url = this.httpUrl + path;
        var options = new RequestOptions({ headers: this.headers });
        var response = this.http.post(url, body, options).map(function (res) { return res.json(); });
        return response;
    };
    //COMMON
    HttpService.prototype.Put = function (body) {
        var path = '/Common/PUT';
        var url = this.httpUrl + path;
        var options = new RequestOptions({ headers: this.headers });
        var response = this.http.put(url, body, options).map(function (res) {
            return res.json();
        });
        return response;
    };
    //COMMON
    HttpService.prototype.PutId = function (body) {
        var path = '/Common/PutId';
        var url = this.httpUrl + path;
        var options = new RequestOptions({ headers: this.headers });
        var response = this.http.put(url, body, options).map(function (res) {
            return res.json();
        });
        return response;
    };
    HttpService.prototype.PutUpdate = function (body) {
        var path = '/Common/PutUpdate';
        var url = this.httpUrl + path;
        var options = new RequestOptions({ headers: this.headers });
        var response = this.http.put(url, body, options).map(function (res) {
            return res.json();
        });
        return response;
    };
    return HttpService;
}());
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [EnvironmentProvider,
        Http])
], HttpService);
export { HttpService };
//# sourceMappingURL=http-service.js.map