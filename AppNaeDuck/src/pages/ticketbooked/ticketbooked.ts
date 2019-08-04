import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-ticketbooked',
  templateUrl: 'ticketbooked.html'
})
export class TicketbookedPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
 
 home() {
    this.navCtrl.setRoot(HomePage);
  }
   dismiss() {
		this.viewCtrl.dismiss();
	}

}
