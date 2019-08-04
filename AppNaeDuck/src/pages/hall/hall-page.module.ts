import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HallPage } from './hall-page';
import { PipesModule } from './../../pipes/pipes.module'



@NgModule({
  declarations: [
    HallPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(HallPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HallPageModule {}
