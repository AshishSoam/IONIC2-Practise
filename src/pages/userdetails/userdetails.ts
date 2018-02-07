import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the UserdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {
 abc : object = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider) {
    this.abc= this.services.userobj;
    console.log(this.abc)
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserdetailsPage');
  // }

 

}
