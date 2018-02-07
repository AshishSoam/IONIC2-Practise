import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
import { Component,AfterViewInit } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import {ViewmapPage} from '../../pages/viewmap/viewmap';
import {GeolocationPage} from '../../pages/geolocation/geolocation';

import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the GooglemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
})
export class GooglemapPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  latitude:number;
  longitude:number;
  useraddress :object={}



  constructor(public navCtrl: NavController, public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private modalCtrl: ModalController,
    public services: ServicesProvider) {
  }

 
  ngAfterViewInit(){
    // let id = document.getElementById('img')
    //let input_from =  (<HTMLInputElement>document.getElementById('address'));
    
     
    let input_from = document.getElementById('address1').getElementsByTagName('input')[0];
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
          // SignupPage.call
          
        // console.log(this.signupData);
        self.useraddress['address1'] = place.formatted_address
          console.log(place.formatted_address)
        
         console.log(geometry.location.lng());
        this.latitude=geometry.location.lng();
        this.longitude=geometry.location.lat();
        console.log(geometry.location.lat());
        } 
        
        });          
    }

    loadMap()
      {
        this.services.userobj100=this.useraddress;
        //console.log(JSON.stringify(this.services.userobj100))
        // this.modalCtrl.create(ViewmapPage).present();
         this.navCtrl.push(ViewmapPage)      
      }
    
  geomap(){
    this.navCtrl.push(GeolocationPage)
  }



  }


