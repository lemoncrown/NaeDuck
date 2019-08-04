import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
import { EventPage } from '../event/event';

@Component({
  selector: 'page-djinfo',
  templateUrl: 'djinfo.html'
})
export class DjinfoPage {

  constructor(public navCtrl: NavController) {

  }
    

 event() {
    this.navCtrl.push(EventPage);
  }

}
