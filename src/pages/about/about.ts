import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private socialSharing: SocialSharing) {


  }
new(){
  console.log('hello')
  // Check if sharing via email is supported


this.socialSharing.canShareViaEmail().then(() => {
// Sharing via email is possible
}).catch(() => {
// Sharing via email is not possible
});





// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
console.log('success')
// Success!
}).catch(() => {
// Error!
});



// shareViaInstagram(message, image)

}


new1(){
  this.socialSharing.shareViaFacebook('hello',).then(()=>{
    
    }).catch(()=>{
    
    });
}

new2(){
  this.socialSharing.shareViaSMS('hey there??', '8938084598').then(()=>{

  }).catch(()=>{

  });

}



}
