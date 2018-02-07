import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherPage} from '../../pages/teacher/teacher';
import { ServicesProvider } from '../../providers/services/services';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
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
 * Generated class for the BatchlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batchlocation',
  templateUrl: 'batchlocation.html',
})
export class BatchlocationPage {
abcobj:object={}
map: GoogleMap;
stdarray:any=[]
mapElement: HTMLElement;
latitude:any;
longitude:any;
i:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public services: ServicesProvider,private nativeGeocoder: NativeGeocoder,private googleMaps: GoogleMaps, ) {
    this.stdarray=this.services.array

    console.log(this.stdarray)
    this.abcobj=this.services.teacherobj;
    console.log(this.abcobj)
    console.log("Aaashish")

  //   for(var i=0;i<this.stdarray.length;i++){
  // console.log(this.stdarray[i].lat)


  //   }
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchlocationPage');
  this.load()
  }
 load(){
 this.loadMap();
 }
 loadMap() 
 {
   this.mapElement = document.getElementById('map3');

   let mapOptions: GoogleMapOptions = {
     camera: {
       target: {
         lat: 40.7134,
         lng: 74.0055
       },
       zoom: 5,
       tilt: 30
     }
   
   };

   this.map = this.googleMaps.create(this.mapElement, mapOptions);

   this.map.one(GoogleMapsEvent.MAP_READY)
   .then(() => {
  
     console.log('Map is ready!');
     for(var i=0;i<this.stdarray.length;i++)
   {
     alert(this.stdarray[i].lat+"and==>"+this.stdarray[i].lng)

    // Now you can use all methods safely.
     this.map.addMarker({
         title: this.stdarray[i].address3,
         icon: 'blue',
         animation: 'DROP',
         position: {
          lat: this.stdarray[i].lat,
          lng: this.stdarray[i].lng
         }
       })
       .then(marker => {
         marker.on(GoogleMapsEvent.MARKER_CLICK)
           .subscribe(() => {
             
             //alert(this.abcobj['address1']);
           });
       });
      }
   });
 }
  onDismiss(){
    this.navCtrl.setRoot(TeacherPage)
  }
}
