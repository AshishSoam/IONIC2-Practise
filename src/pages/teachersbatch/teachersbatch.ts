import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { BatchlocationPage  } from '../../pages/batchlocation/batchlocation';
/**
 * Generated class for the TeachersbatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachersbatch',
  templateUrl: 'teachersbatch.html',
})
export class TeachersbatchPage {
newobj:object={}
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider) {
    this.newobj=this.services.teacherobj;
    console.log('neechay dekh')
    console.log(this.newobj)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachersbatchPage');
  }

location(){

  this.navCtrl.push(BatchlocationPage)
}

}
