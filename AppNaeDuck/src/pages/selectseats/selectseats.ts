import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfrimtIcketsPage } from '../confrimtIckets/confrimtIckets';
@Component({
  selector: 'page-selectseats',
  templateUrl: 'selectseats.html'
})
export class SelectseatsPage {

  constructor(public navCtrl: NavController) {

  }
   
confrimtIckets() {
    this.navCtrl.push(ConfrimtIcketsPage);
  }

}
