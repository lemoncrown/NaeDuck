import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFlatPage } from './login-flat-page';

import { LogoutFlatModule } from '../../component/logout/logout-flat/logout-flat.module';

@NgModule({
  declarations: [
    LogoutFlatModule,
  ],
  imports: [
    IonicPageModule.forChild(LogoutFlatModule),
    LogoutFlatModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LogoutFlatPageModule {}
