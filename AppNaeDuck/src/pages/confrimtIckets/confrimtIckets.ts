import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectseatsPage } from '../selectseats/selectseats';
import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-confrimtIckets',
  templateUrl: 'confrimtIckets.html'
})
export class ConfrimtIcketsPage {

  constructor(public navCtrl: NavController) {

  }

   selectseats() {
    this.navCtrl.push(SelectseatsPage);
  }
    payment() {
    this.navCtrl.push(PaymentPage);
  }


}
