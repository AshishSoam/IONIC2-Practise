import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextspeechPage } from './textspeech';

@NgModule({
  declarations: [
    TextspeechPage,
  ],
  imports: [
    IonicPageModule.forChild(TextspeechPage),
  ],
})
export class TextspeechPageModule {}
