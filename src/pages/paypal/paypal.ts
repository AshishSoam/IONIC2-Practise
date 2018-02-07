import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { LoadingController } from 'ionic-angular'
/**
 * Generated class for the PaypalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html',
})
export class PaypalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private payPal: PayPal,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalPage');
    
    /*var clientIDs = {
      "PayPalEnvironmentProduction": "APP-80W284485P519543T", //"YOUR_PRODUCTION_CLIENT_ID", // not needed while testing
      //"PayPalEnvironmentSandbox": "PAYPAL_ENV_SANDBOX"
      "PayPalEnvironmentSandbox": "PayPalEnvironmentNoNetwork"
          //"PayPalEnvironmentSandbox": "PayPalEnvironmentProduction"
    };*/
  this.presentLoadingDefault()

    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AazbxkkQPIMTv0RN2PX-HgaBGkga6jSW6mjhxi0KP5hxMzNUqVKnCKIKXhhMy9MSy2QKSgg2u8-nPvup'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment('0.33', 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((resp) => {
          console.log(JSON.stringify(resp))
          console.log(JSON.stringify(resp.response.id))
          alert(resp.response.id)
          //alert("Payment ID =>"resp.response.id)
          // Successfully paid
    
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });


  }
  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 10000);
  }
  
}
