import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html'
})
export class MyprofilePage {

  constructor(public navCtrl: NavController) {

  }

 home() {
    this.navCtrl.setRoot(HomePage);
  }

}
