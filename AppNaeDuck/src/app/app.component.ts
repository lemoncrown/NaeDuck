import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { MydjsPage } from '../pages/mydjs/mydjs';
import { MyticketsPage } from '../pages/mytickets/mytickets';
import { ConditionsPage } from '../pages/conditions/conditions';
import { HelpPage } from '../pages/help/help';
import { SigninPage } from '../pages/signin/signin';
import { TranslateService } from '../../node_modules/@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SigninPage;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, public translate:TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation

  }

 initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  
    home() {
      this.nav.setRoot(HomePage);
    } 
    myprofile() {
      this.nav.setRoot(MyprofilePage);
    } 
    mydjs() {
      this.nav.setRoot(MydjsPage);
    } 
    mytickets() {
      this.nav.setRoot(MyticketsPage);
    } 
    conditions() {
      this.nav.setRoot(ConditionsPage);
    } 
    help() {
      this.nav.setRoot(HelpPage);
    } 
    signin() {
      this.nav.setRoot(SigninPage);
    } 
    
}
