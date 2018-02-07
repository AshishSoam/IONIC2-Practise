import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data'; 

/**
 * Generated class for the JsondataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jsondata',
  templateUrl: 'jsondata.html',
})
export class JsondataPage {
jsonData:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public redditService:RedditDataProvider) {
    this.redditService.getLocalData().subscribe(
      result => {
      this.jsonData=result.data.companyInterests;
      console.log("Success : "+JSON.stringify(this.jsonData));
      },
      err =>{
      console.error("Error : "+err);
      } ,
      () => {
      console.log('getData completed');
      }
      );
   
      
  }

  ionViewDidLoad() {
    this.redditService.getLocalData();
    console.log('ionViewDidLoad JsondataPage');
    
    console.log(this.redditService.abc)
  }

}
