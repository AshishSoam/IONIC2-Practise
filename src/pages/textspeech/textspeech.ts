import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
// import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the TextspeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-textspeech',
  templateUrl: 'textspeech.html',
})
export class TextspeechPage {
textspeech:object={}

  constructor(public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech,private vibration: Vibration,private localNotification: PhonegapLocalNotification,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextspeechPage');
    this.localNotification.requestPermission().then(
      (permission) => {
        if (permission === 'granted') {
    
          // Create the notification
          this.localNotification.create('My Title', {
            tag: 'Ionic2 App',
            body: 'You have used plugin for Local notification.',
            icon: 'assets/icon/favicon.ico'
          });
    
        }
      }
    );
    
  }
 listen(address1){
  this.vibration.vibrate(1000);
  //this.vibration.vibrate([2000,1000,2000]);
 
 console.log(address1)
  this.tts.speak(address1)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
 }
//  call(){
//   this.callNumber.callNumber("18001010101", true)
//   .then(() => console.log('Launched dialer!'))
//   .catch(() => console.log('Error launching dialer'));
//  }
}
