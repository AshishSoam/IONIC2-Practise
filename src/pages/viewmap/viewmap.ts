import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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

//  declare var google;
//  @IonicPage()
@Component({
  selector: 'page-viewmap',
  templateUrl: 'viewmap.html',
  
})
export class ViewmapPage {
  abcobj : object ={}
  map: GoogleMap;
  mapElement: HTMLElement;
  latitude:any;
  longitude:any;
  

  // constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,
  //   public services: ServicesProvider,
  //   private nativeGeocoder: NativeGeocoder,
  //   private googleMaps: GoogleMaps) {
      
      
  // }


  constructor(private googleMaps: GoogleMaps, public viewCtrl: ViewController, private nativeGeocoder: NativeGeocoder,public services: ServicesProvider) { 
    console.log('ionViewDidLoad ViewmapPage');
    console.log(this.services.userobj100)
    this.abcobj= this.services.userobj100;
   console.log("ashish"+JSON.stringify(this.abcobj))

  }
 

  ionViewDidLoad() {
    this.load()
}

load(){
  this.nativeGeocoder.forwardGeocode(this.abcobj['address1'])
   .then((coordinates: NativeGeocoderForwardResult) =>{
      console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
      this.latitude=coordinates.latitude;
      this.longitude=coordinates.longitude;
      this.loadMap();
   })
   .catch((error: any) => console.log(error));
  
}
  loadMap() 
  {console.log(this.latitude)
    this.mapElement = document.getElementById('map1');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 40.7134,
          lng: 74.0055
        },
        zoom: 8,
        tilt: 30
      }
    
    };console.log(this.latitude)

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');
      this.map.animateCamera({
        target: {lat: this.latitude, lng: this.longitude},
        zoom: 8,
        tilt: 60,
        bearing: 140,
        duration: 5000,
        padding: 0  // default = 20px
      }).then(camera =>{
        // alert(camera)
      })

      // Now you can use all methods safely.
      this.map.addMarker({
          title: this.abcobj['address1'],
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat:this.latitude,
            lng: this.longitude
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              //alert(this.abcobj['address1']);
            });
        });

    });
  }
  onDismiss() {
    this.viewCtrl.dismiss();
  }
}
