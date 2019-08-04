import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectItem } from './inspect-item';


@NgModule({
  declarations: [
    InspectItem
  ],
  imports: [
    IonicPageModule.forChild(InspectItem)
  ]
})
export class InspectItemModule {}
