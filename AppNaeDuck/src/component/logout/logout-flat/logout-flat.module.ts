import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoutFlat } from './logout-flat';

@NgModule({
    declarations: [
      LogoutFlat,
    ],
    imports: [
        IonicPageModule.forChild(LogoutFlat),
    ],
    exports: [
      LogoutFlat
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LogoutFlatModule { }
