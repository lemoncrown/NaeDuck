import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { NearyeventsPage } from '../nearyevents/nearyevents';
import { EventPage } from '../event/event';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { AllEventPage } from '../allevent/allevent';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})
export class HomePage {

  items: Array<any>; 
  itemsCast: Array<any>; 

  home_tab: string = "for_you";

  httpImgUrl: string;


  constructor(public navCtrl: NavController
    , private httpService: HttpService
    , private environmentProvider: EnvironmentProvider
    , private globalVars: GlobalVars) {

  }

  ngOnInit() {
    this.httpImgUrl = this.environmentProvider.getUploadImgUrl();

    const data = [
      { taskname: 'chennai', id: 'maa', status: 'Submitted' },
      { taskname: 'mumbai', id: 'bom', status: 'Resolved' },
      { taskname: 'delhi', id: 'del', status: 'Submitted' },
      { taskname: 'salem', id: 'che', status: 'In Progress' },
      { taskname: 'bengaluru', id: 'blr', status: 'Resolved' },
      { taskname: 'chavvapet', id: 'chv', status: 'Submitted' }
    ];

    function filterByString(data, s) {
      return data.filter(e => e.id.includes(s) || e.taskname.includes(s))
        .sort((a, b) => a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 : 0);
    }

    console.log(filterByString(data, "ch"));

    this.getData();
  }



  ngOnDestroy() {
  }
  //LIST
  getData() {
    let body = {
      TID: "DD-1004",
      Items: [
        {
          TODAY: this.globalVars.getToday()
        }
      ]
    };

    this.httpService.Post(body).subscribe(
      data => {
        if (data != null) {
          console.log(data.length);
          console.log(data[0]);
          console.log(data[1]);
          console.log(data);
          this.items = data[0];
          this.itemsCast = data[1];

        } else {
          //  this.showError('예약정보가 없습니다');
        }

      },
      err => {
        console.log(err);
      },
      () => {

      }
    );

  }
  
  
  filterByString2(data, s) {
    return data.filter(e => e.SHOW_RAWID === 1);
  }

 

  test() {
    console.log(this.filterByString(this.itemsCast ,"1"));
  }

  filterByString(data, s) {


    let result = data.filter(function (entry) {
      return entry.SHOW_RAWID === s
    });

    console.log(result);
    return result;
  }


  nearyevents() {
    console.log('all events');
    this.navCtrl.push(AllEventPage);
  }

  event(param) {
    this.navCtrl.push(EventPage, param);
  }

  eventgood(param) {

    console.log(param);
  }
  
  //START
 

}
