import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
@Component({
  selector: 'page-nearyevents',
  templateUrl: 'nearyevents.html'
})
export class NearyeventsPage { 
tab: string = "today";
private homeIcon1 = false;
private homeIcon2 = false;
private homeIcon3 = false;
  constructor(public navCtrl: NavController) {

  }
 

 event() {
    this.navCtrl.push(EventPage);
  }
    
  toggleHomeIcon1(){
   this.homeIcon1 = !this.homeIcon1;
   } 
    toggleHomeIcon2(){
   this.homeIcon2 = !this.homeIcon2;
   } 
    toggleHomeIcon3(){
   this.homeIcon3 = !this.homeIcon3;
   }
}
