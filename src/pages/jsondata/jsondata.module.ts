import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsondataPage } from './jsondata';

@NgModule({
  declarations: [
    JsondataPage,
  ],
  imports: [
    IonicPageModule.forChild(JsondataPage),
  ],
})
export class JsondataPageModule {}
