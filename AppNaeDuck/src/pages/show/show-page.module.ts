import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPage } from './show-page';
import { PipesModule } from './../../pipes/pipes.module'


@NgModule({
  declarations: [
    ShowPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ShowPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowPageModule {}
