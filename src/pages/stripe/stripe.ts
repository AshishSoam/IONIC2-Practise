import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the StripePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stripe',
  templateUrl: 'stripe.html',
})
export class StripePage {
loading:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private stripe: Stripe,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.presentLoadingDefault()
    console.log('ionViewDidLoad StripePage');
    this.stripe.setPublishableKey('pk_test_dEeuq5b3DFsWPJQeNUoiK99A');
    
    let card = {
     number: '4242424242424242',
     expMonth: 12,
     expYear: 2020,
     cvc: '220'
    };
    
    this.stripe.createCardToken(card)
       .then(token => {
         this.loading.dismiss()
         alert(token.id)
         console.log(token.id)})
       .catch(error =>{
         this.loading.dismiss()
        console.error(error)});
  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
  this.loading.present();
  
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 10000);
  }
}
