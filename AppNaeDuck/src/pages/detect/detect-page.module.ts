import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetectPage } from './detect-page';
//import { FilePath } from '@ionic-native/file-path';
//import { Transfer } from '@ionic-native/transfer';
import { CameraPreview} from '@ionic-native/camera-preview';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    DetectPage
  ],
  imports: [
    IonicPageModule.forChild(DetectPage)
  ],
  providers: [
   // FilePath,
    //Transfer,
    CameraPreview,
    HttpClient
  ]
})
export class DetectPageModule {}
