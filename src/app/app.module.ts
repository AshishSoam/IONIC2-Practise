import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TextspeechPage  } from '../pages/textspeech/textspeech';
import { JsondataPage  } from '../pages/jsondata/jsondata';
import { BatchlocationPage  } from '../pages/batchlocation/batchlocation';
import { TeachersbatchPage  } from '../pages/teachersbatch/teachersbatch';
import { StripePage  } from '../pages/stripe/stripe';
import { FilterPage  } from '../pages/filter/filter';

  
import {GooglemapPage} from '../pages/googlemap/googlemap';
import {ViewmapPage} from '../pages/viewmap/viewmap';
import {GeolocationPage} from '../pages/geolocation/geolocation';
import {StudentPage} from '../pages/student/student';
import {TeacherPage} from '../pages/teacher/teacher';
import {SliderPage} from '../pages/slider/slider';
import {FacebookinfoPage} from '../pages/facebookinfo/facebookinfo';
import {GoogleinfoPage} from '../pages/googleinfo/googleinfo';
import {PaypalPage} from '../pages/paypal/paypal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpModule } from '@angular/http';
import { ServicesProvider } from '../providers/services/services'; 
import { RedditDataProvider } from '../providers/reddit-data/reddit-data'; 
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
//  import { CallNumber } from '@ionic-native/call-number';
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
 import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
 import { GooglePlus } from '@ionic-native/google-plus';
 import { SocialSharing } from '@ionic-native/social-sharing';
 import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
 import { Stripe } from '@ionic-native/stripe';
 import { Camera, CameraOptions } from '@ionic-native/camera';
 import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,SignupPage,UserdetailsPage,TabsPage,HomePage,ContactPage,AboutPage,JsondataPage,GooglemapPage,ViewmapPage,TextspeechPage,GeolocationPage,StudentPage,
    TeacherPage,BatchlocationPage,SliderPage,TeachersbatchPage,FacebookinfoPage,GoogleinfoPage,PaypalPage,StripePage,FilterPage
  ],
  imports: [
    BrowserModule, AutoCompleteModule,
    HttpModule ,IonicImageViewerModule,
    IonicModule.forRoot(MyApp,{scrollAssist:false,autoFocusAssist:true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsQ8p6-NH6aTqfqhDvnjR_KYdPKK3tyQg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,SignupPage,UserdetailsPage,TabsPage,HomePage,ContactPage,AboutPage,JsondataPage,GooglemapPage,ViewmapPage,TextspeechPage,GeolocationPage,StudentPage,
    TeacherPage,BatchlocationPage,SliderPage,TeachersbatchPage, FacebookinfoPage,GoogleinfoPage,PaypalPage,StripePage,FilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    ServicesProvider,
    RedditDataProvider,Geolocation,GoogleMaps,NativeGeocoder,TextToSpeech,Vibration,PhonegapLocalNotification,Facebook,
    GooglePlus, PayPal,Stripe,SocialSharing,ActionSheet,Camera
  ]
})
export class AppModule {}
