import { Component,AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentPage} from '../../pages/student/student';
import { ServicesProvider } from '../../providers/services/services';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {
teacher:object={}
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: ServicesProvider,private googleMaps: GoogleMaps,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }
 signup(){
   this.navCtrl.push(StudentPage)
   this.services.teacherobj=this.teacher;
 }
 ngAfterViewInit(){
  // let id = document.getElementById('img')
  //let input_from =  (<HTMLInputElement>document.getElementById('address'));
  
   
  let input_from = document.getElementById('address2').getElementsByTagName('input')[0];
  let options = {
    types: []
    // componentRestrictions: { }
    };

    let autocomplete1 = new google.maps.places.Autocomplete(input_from, options);
    
    let self = this;
    google.maps.event.addListener(autocomplete1, 'place_changed', function() {
      // console.log("dsf")
       //let add='';
      let place = autocomplete1.getPlace();
      let geometry = place.geometry;
      if ((geometry) !== undefined) {
      
      self.teacher['address2'] = place.formatted_address
        console.log(place.formatted_address)
      
       console.log(geometry.location.lng());
      this.latitude=geometry.location.lng();
      this.longitude=geometry.location.lat();
      console.log(geometry.location.lat());
      } 
      
      });          
  }
}
