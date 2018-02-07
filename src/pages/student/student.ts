import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherPage} from '../../pages/teacher/teacher';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
student:object={}
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }
  ngAfterViewInit(){
    //console.log("wwwwwwwww")
    // let id = document.getElementById('img')
    //let input_from =  (<HTMLInputElement>document.getElementById('address'));
    
     
    let input_from = document.getElementById('address3').getElementsByTagName('input')[0];
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
        
        self.student['address3'] = place.formatted_address
        self.student['lat'] = geometry.location.lat();
        self.student['lng']=geometry.location.lng();
          console.log(place.formatted_address)
        
         console.log(geometry.location.lng());
        this.latitude=geometry.location.lng();
        this.longitude=geometry.location.lat();
      
        console.log(geometry.location.lat());
        } 
        
        });          
    }





logout(){
  this.navCtrl.setRoot(TeacherPage)
}
submit(){

this.services.array.push(this.student);

console.log(this.services.array)
this.student={name:'',address3:''}
}

}
