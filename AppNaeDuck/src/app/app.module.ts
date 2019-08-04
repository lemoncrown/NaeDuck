import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { ConditionsPage } from '../pages/conditions/conditions';
import { ConfrimtIcketsPage } from '../pages/confrimtIckets/confrimtIckets';
import { DjinfoPage } from '../pages/djinfo/djinfo'; //지줘야 함
import { DjlineupPage } from '../pages/djlineup/djlineup'; //지워야 함
import { EventPage } from '../pages/event/event';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { MydjsPage } from '../pages/mydjs/mydjs';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { MyticketsPage } from '../pages/mytickets/mytickets';
import { NearyeventsPage } from '../pages/nearyevents/nearyevents';
import { PaymentPage } from '../pages/payment/payment';
import { SelectseatsPage } from '../pages/selectseats/selectseats';
import { SigninPage } from '../pages/signin/signin';
import { TicketbookedPage } from '../pages/ticketbooked/ticketbooked';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//ADD

import { JsonpModule, HttpModule } from '@angular/http';
import { EnvironmentProvider } from '../providers/environment-provider';
import { GlobalVars } from '../providers/global';
import { PipesModule } from '../pipes/pipes.module'

import { StafflineupPage } from '../pages/stafflineup/stafflineup';
import { StaffinfoPage } from '../pages/staffinfo/staffinfo'; 
import { FollowupPage } from '../pages/follow/followup';
import { AllEventPage } from '../pages/allevent/allevent';
import { EvententerPage } from '../pages/allevent/evententer';
//EvententerPage

//AllEventPage

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    ConditionsPage,
    ConfrimtIcketsPage,
    DjinfoPage,
    DjlineupPage,
    EventPage,
    ForgotpasswordPage,
    HelpPage,
    HomePage,
    MydjsPage,
    MyprofilePage,
    MyticketsPage,
    NearyeventsPage,
    PaymentPage,
    SelectseatsPage,
    SigninPage,
    TicketbookedPage,
    StafflineupPage,
    StaffinfoPage,
    FollowupPage,
    AllEventPage,
    EvententerPage
  
  ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    JsonpModule,
    HttpModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConditionsPage,
    ConfrimtIcketsPage,
    DjinfoPage,
    DjlineupPage,
    EventPage,
    ForgotpasswordPage,
    HelpPage,
    HomePage,
    MydjsPage,
    MyprofilePage,
    MyticketsPage,
    NearyeventsPage,
    PaymentPage,
    SelectseatsPage,
    SigninPage,
    TicketbookedPage,
    StafflineupPage,
    StaffinfoPage,
    FollowupPage,
    AllEventPage,
    EvententerPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EnvironmentProvider,
    GlobalVars,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
