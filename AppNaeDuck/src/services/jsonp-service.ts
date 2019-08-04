import { Jsonp,  Headers, RequestOptions , Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';


import { Injectable } from '@angular/core';
import { EnvironmentProvider } from '../providers/environment-provider';
import 'rxjs/add/operator/map';



import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class JsonpService {

   // private url: any = "https://jobs.github.com/positions.json?description=python&location=new+york&callback=JSONP_CALLBACK";
   // private url: any = "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]&callback=JSONP_CALLBACK";
   // private url: any = "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]";

    private url: any = '';// "http://localhost:6533/SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]";

    private callback = '&callback=JSONP_CALLBACK';
    private data: any;
    /*
    static get parameters() {
        return [[Http]];
    }
    */
    constructor(private jsonp: Jsonp, private environmentProvider: EnvironmentProvider
      , private http: Http) {

        this.url = this.environmentProvider.getJsonP();



    }

    //SQL INSERT/UPDATE/DELETE

    sqlInsert(property) {
        var data = JSON.stringify(property);
      
        var path = 'SetDatabase/Get?id=1&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    sqlUpdate(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=2&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    sqlUpdateCount(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=7&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }


    sqlUpdateMinusCount(property) {
      var data = JSON.stringify(property);

      var path = 'SetDatabase/Get?id=8&obj=' + data;
      var callUrl = this.url + path + this.callback;

      console.log(callUrl);
      var response = this.jsonp.get(callUrl).map(res => res.json());
      return response;

    }

    sqlInsertList(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=6&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    //SQL INSERT/UPDATE/DELETE

    sqlInsertRawId(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=4&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }


    sqlRegisterRawId(property) {
      var data = JSON.stringify(property);

      var path = 'SetDatabase/Get?id=99&obj=' + data;
      var callUrl = this.url + path + this.callback;

      console.log(callUrl);
      var response = this.jsonp.get(callUrl).map(res => res.json());
      return response;

    }


    sqlProcedureExec(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=9&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    sqlProcedureMultiExec(property) {
        var data = JSON.stringify(property);

        var path = 'SetDatabase/Get?id=10&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    //login
    getMemberLogin(property) {

        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1001&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    //login
    getRegisterLogin(property) {

        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1000&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    //default濡??깅줉??Address
    getDefaultAPI(id:string, property) {

        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id='+id+'&obj=' + data;
        var callUrl = this.url + path + this.callback;

        console.log(callUrl);
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }




    //test
    searchHospitals(geolocation) {
        console.log(geolocation.lat);
        console.log(geolocation.lng);
        let baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);

        var response = this.jsonp.get(this.url).map(res => res.json());
        return response;
    }

    //getHospitalCategoryList
    getHospitalCategoryList() {
 
        var path = 'SickApp/Get?id=0&obj=[{%22RAWID%22:%22jongnam%22}]';
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;
    }

    //insert
    setMessageCall(data) {

        //SAVE ?몄텧?섍린
        var response = this.jsonp.get(this.url).map(res => res.json());
        return response;
        
    }

       //getSearchHospitalList
    getSearchHospitalList() {

        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(res => res.json());
        return response;
    }

 

    //info-hospital
    getHospitalInfoData() {

        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(res => res.json());
        return response;
    }

    //info-hospital > comment data list
    getHospitalInfoCommentData() {

        var baseUrl = this.environmentProvider.getWebControllInfo();
        console.log("Web Controll Info :" + baseUrl);
        var callUrl = baseUrl + '?id=ssss';
        var response = this.jsonp.get(this.url).map(res => res.json());
        return response;
    }

    //?ㅼ쓬吏濡?醫뚰몴媛?媛?몄삤湲?
    getDaumGeolocationData(property) {
      
        
        var data = property.address; 

        console.log(data);
        
        var path = 'https://apis.daum.net/local/geo/addr2coord?apikey=19a40b3b4b31307415704b0fcdfadaed&q=' + data +'&output=json';
        var callUrl = path + this.callback;

        console.log(callUrl);
       // callUrl = 'https://apis.daum.net/local/geo/addr2coord?apikey=ad363be7a20787102c42361ea82def86&q=&output=json&callback=JSONP_CALLBACK';
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;
    }

    //媛源뚯슫 蹂묒썝 媛?몄삤湲?
    getHospitalDistanceCategoryList(property) {

        var data = JSON.stringify(property);
        var path = 'SickApp/Get?id=1004&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;


    }



    //commmon
    getCommonAPI(id: string, property) {

        var data = JSON.stringify(property);
        var path = 'CommonApp/Get?id=' + id + '&obj=' + data;
        var callUrl = this.url + path + this.callback;
        var response = this.jsonp.get(callUrl).map(res => res.json());
        return response;

    }

    jsonPost(body) {

      const headers = new Headers();

      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append("Access-Control-Allow-Headers", "X-Requested-With");
      headers.append("Access-Control-Allow-Credentials", "true");


      const requestOptions = new RequestOptions({ headers: headers, withCredentials: true });
    

      var response = this.jsonp.post("http://localhost:54241/FES/Post", body, requestOptions).map(res => res.json());
      return response;

    }

  //post

    //commmon
    Post(body) {
      console.log(body);
      var path = 'Post';
      var callUrl = this.url+ path;// + this.callback;

     
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append("Access-Control-Allow-Headers", "X-Requested-With");
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      let options = new RequestOptions({ headers: headers });
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
      let aaaa = JSON.stringify(body);
      console.log(aaaa);
      var response = this.http.post("http://localhost:54241/FES/Post", body, options).map(res => res.json());
      console.log(">>>>>>>>>>>>>><<<<<<<<<");
      //var response = this.http.post("http://localhost:54241/FES/Post", body, requestOptions).map(res => res.json());
      return response;

    }


    Post2(body) {

    

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

    }

}
