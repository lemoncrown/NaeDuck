var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Jsonp, Headers, RequestOptions, Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { EnvironmentProvider } from '../providers/environment-provider';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
var JsonpService = (function () {
    /*
    static get parameters() {
        return [[Http]];
    }
    */
    function JsonpService(jsonp, environmentProvider, http) {
        this.jsonp = jsonp;
        this.environmentProvider = environmentProvider;
        this.http = http;
        // private url: any = "https://jobs.github.com/positions.json?description=python&location=new+york&callback=JSONP_CALLBACK";
        // private url: any = "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]&callback=JSONP_CALLBACK";
        // private url: any = "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]";
        this.url = ''; // "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]";
        this.callback = '&callback=JSONP_CALLBACK';
        this.url = this.environmentProvider.getJsonP();
    }
    //SQL INSERT/UPDATE/DELETE
    JsonpService.prototype.sqlInsert = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=1&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlUpdate = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=2&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlUpdateCount = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=7&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlUpdateMinusCount = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=8&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlInsertList = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=6&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //SQL INSERT/UPDATE/DELETE
    JsonpService.prototype.sqlInsertRawId = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=4&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlRegisterRawId = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=99&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlProcedureExec = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=9&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.sqlProcedureMultiExec = function (property) {
        var data = JSON.stringify(property);
        var path = 'SetDatabase/Get?id=10&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //login
    JsonpService.prototype.getMemberLogin = function (property) {
        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1001&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //login
    JsonpService.prototype.getRegisterLogin = function (property) {
        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1000&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //default濡??깅줉??Address
    JsonpService.prototype.getDefaultAPI = function (id, property) {
        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=' + id + '&obj=' + data;
        var callUrl = this.url + path + this.callback;
        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //test
    JsonpService.prototype.searchHospitals = function (geolocation) {
        console.log(geolocation.lat);
        console.log(geolocation.lng);
        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var response = this.jsonp.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    //getHospitalCategoryList
    JsonpService.prototype.getHospitalCategoryList = function () {
        var path = 'SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]';
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //insert
    JsonpService.prototype.setMessageCall = function (data) {
        //SAVE ?몄텧?섍린
        var response = this.jsonp.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    //getSearchHospitalList
    JsonpService.prototype.getSearchHospitalList = function () {
        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    //info-hospital
    JsonpService.prototype.getHospitalInfoData = function () {
        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    //info-hospital > comment data list
    JsonpService.prototype.getHospitalInfoCommentData = function () {
        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    //?ㅼ쓬吏濡?醫뚰몴媛?媛?몄삤湲?
    JsonpService.prototype.getDaumGeolocationData = function (property) {
        var data = property.address;
        console.log(data);
        var path = 'https://apis.daum.net/local/geo/addr2coord?apikey=19a40b3b4b31307415704b0fcdfadaed&q=' + data + '&output=json';
        var callUrl = path + this.callback;
        console.log(callUrl);
        // callUrl = 'https://apis.daum.net/local/geo/addr2coord?apikey=ad363be7a20787102c42361ea82def86&q=&output=json&callback=JSONP_CALLBACK';
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //媛源뚯슫 蹂묒썝 媛?몄삤湲?
    JsonpService.prototype.getHospitalDistanceCategoryList = function (property) {
        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1004&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    //commmon
    JsonpService.prototype.getCommonAPI = function (id, property) {
        var data = JSON.stringify(property);
        var path = 'CommonApp/Get?id=' + id + '&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(function (res) { return res.json(); });
        return response;
    };
    JsonpService.prototype.jsonPost = function (body) {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        headers.append("Access-Control-Allow-Credentials", "true");
        var requestOptions = new RequestOptions({ headers: headers, withCredentials: true });
        var response = this.jsonp.post("http://localhost:54241/FES/Post", body, requestOptions).map(function (res) { return res.json(); });
        return response;
    };
    //post
    //commmon
    JsonpService.prototype.Post = function (body) {
        console.log(body);
        var path = 'Post';
        var callUrl = this.url + path; // + this.callback;
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new RequestOptions({ headers: headers });
        // headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        // headers.append("Access-Control-Allow-Credentials", "true");
        // headers.append("Accept", 'application/json');
        // headers.append('Content-Type', 'application/json');
        /*
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        */
        // headers.append('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token');
        //const requestOptions = new RequestOptions({ headers: headers});
        ///   const requestOptions = new RequestOptions({ headers: headers, withCredentials: true});
        /*
        this.http.post("http://localhost:54241/FES/Post", body, options)
          .subscribe(data => {
            console.log(data);
          }, error => {
            console.log(error);
          });
        */
        var aaaa = JSON.stringify(body);
        console.log(aaaa);
        var response = this.http.post("http://localhost:54241/FES/Post", body, options).map(function (res) { return res.json(); });
        console.log(">>>>>>>>>>>>>><<<<<<<<<");
        //var response = this.http.post("http://localhost:54241/FES/Post", body, requestOptions).map(res => res.json());
        return response;
    };
    JsonpService.prototype.Post2 = function (body) {
        /*
        console.log('>>>>>>>>>>>>>>>>>>>>start>>>>>>>');
       // var body = JSON.stringify(property);
        var path = 'Post'
      
        //var response = this.jsonp.get(callUrl).map(res => res.json());
  
        console.log(callUrl);
  
  
        var response = this.jsonp.post(callUrl, body).map(res => res.json());
  
  
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log(response);
        return response;
        */
    };
    return JsonpService;
}());
JsonpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Jsonp, EnvironmentProvider,
        Http])
], JsonpService);
export { JsonpService };
//# sourceMappingURL=jsonp-service.js.map