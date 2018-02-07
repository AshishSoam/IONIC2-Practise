import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  images=['15.jpg','12.jpg','16.jpg','9.jpg']
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech,private vibration: Vibration,) {
    
  }
  // goToSlide() {
  //   this.slides.slideTo(2, 500);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

home(){
  this.navCtrl.setRoot(LoginPage)
  
    this.vibration.vibrate(1000);
    //this.vibration.vibrate([2000,1000,2000]);
   

    this.tts.speak('Welcome to ionic')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
   }
}


