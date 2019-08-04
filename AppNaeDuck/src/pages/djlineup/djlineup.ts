import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DjinfoPage } from '../djinfo/djinfo';
@Component({
  selector: 'page-djlineup',
  templateUrl: 'djlineup.html'
})
export class DjlineupPage {

  constructor(public navCtrl: NavController) {

  }
   
 djinfo() {
    this.navCtrl.push(DjinfoPage);
  }

}
