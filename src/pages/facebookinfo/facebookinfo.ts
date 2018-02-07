import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'; 
/**
 * Generated class for the FacebookinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facebookinfo',
  templateUrl: 'facebookinfo.html',
})
export class FacebookinfoPage {
  newobj:object={}
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider) {
    this.newobj=this.services.fbdata
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacebookinfoPage');
    console.log(this.services.fbdata)
   console.log('phuch gaya??')
    console.log(this.newobj)
  }

}
