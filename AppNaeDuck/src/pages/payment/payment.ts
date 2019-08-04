import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TicketbookedPage } from '../ticketbooked/ticketbooked';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
    
   home() {
    this.navCtrl.setRoot(HomePage);
  }

     ticketbooked() {
    let modal = this.modalCtrl.create(TicketbookedPage);
    modal.present();
  }
}
