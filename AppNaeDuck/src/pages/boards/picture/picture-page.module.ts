import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PicturePage } from './picture-page';



@NgModule({
  declarations: [
    PicturePage
  ],
  imports: [
    IonicPageModule.forChild(PicturePage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PicturePageModule {}
