import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectPage } from './inspect-page';
//import { FilePath } from '@ionic-native/file-path';
//import { Transfer } from '@ionic-native/transfer';
import { CameraPreview} from '@ionic-native/camera-preview';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    InspectPage
  ],
  imports: [
    IonicPageModule.forChild(InspectPage)
  ],
  providers: [
   // FilePath,
    //Transfer,
    CameraPreview,
    HttpClient
  ]
})
export class InspectPageModule {}
