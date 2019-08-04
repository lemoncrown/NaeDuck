import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DjinfoPage } from '../djinfo/djinfo';
@Component({
  selector: 'page-mydjs',
  templateUrl: 'mydjs.html'
})
export class MydjsPage {

  constructor(public navCtrl: NavController) {

  }
   
 djinfo() {
    this.navCtrl.push(DjinfoPage);
  }

}
