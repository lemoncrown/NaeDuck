import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Injectable } from '@angular/core';
import { EnvironmentProvider } from '../providers/environment-provider';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

    private httpUrl: any = '';  
    private headers = new Headers();

    constructor(private environmentProvider: EnvironmentProvider
      , private http: Http) {

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
    PostFES(body) {

      var path = '/FES/POST';
      var url = this.httpUrl + path;

      let options = new RequestOptions({ headers: this.headers });

      var response = this.http.post(url, body, options).map(res => res.json());

      return response;
      //return response;



      /*
      let options = new RequestOptions({ headers: this.headers });
  
      var response = this.http.post(url, body, options).map(res => res.json());

      return response;
      */
    }


    Post(body) {

      var path = '/DD/POST';  //Controllers/DDController.cs 호출하기
      var url = this.httpUrl + path;

      let options = new RequestOptions({ headers: this.headers });
      var response = this.http.post(url, body, options).map(res => res.json());
      return response;

    }


    //COMMON
    Put(body) {

      var path = '/Common/PUT';
      var url = this.httpUrl + path;
      
      let options = new RequestOptions({ headers: this.headers });
      var response = this.http.put(url, body, options).map(res =>
        res.json()
      );

      return response;
    }

    //COMMON
    PutId(body) {

      var path = '/Common/PutId';
      var url = this.httpUrl + path;

      let options = new RequestOptions({ headers: this.headers });
      var response = this.http.put(url, body, options).map(res =>
        res.json()
      );

      return response;
    }

    PutUpdate(body) {

      var path = '/Common/PutUpdate';
      var url = this.httpUrl + path;

      let options = new RequestOptions({ headers: this.headers });
      var response = this.http.put(url, body, options).map(res =>
        res.json()
      );

      return response;
    }


    //PutId

}
