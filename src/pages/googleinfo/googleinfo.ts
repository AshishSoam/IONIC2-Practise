import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'; 
/**
 * Generated class for the GoogleinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-googleinfo',
  templateUrl: 'googleinfo.html',
})
export class GoogleinfoPage {
 newwobj:object={}
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleinfoPage');
    this.newwobj=this.services.googleobj
     console.log(this.newwobj)
    


  }

}


// this.obj['email']=res.email
// this.obj['username']=res.displayName
// this.obj['imgUrl']=res.imageUrl