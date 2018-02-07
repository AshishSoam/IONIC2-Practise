import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  map: GoogleMap;
  mapElement: HTMLElement;
latitude:any;
longitude:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,private googleMaps: GoogleMaps,public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
   
   this.load()
     }
  load()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latitude=resp.coords.latitude;
      this.longitude=resp.coords.longitude
      console.log(resp.coords.latitude)
      this.loadMap()
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  loadMap() {
    this.mapElement = document.getElementById('map2');

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

    // Wait the MAP_READY before using any methods.
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
            title: 'Your current location',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.latitude,
              lng: this.longitude
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
               // alert('clicked');
              });
          });

      });
  }

  close()
  {
    this.viewCtrl.dismiss();
  }




}
     
    