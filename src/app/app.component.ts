import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { TabsPage } from '../pages/tabs/tabs';
import { JsondataPage  } from '../pages/jsondata/jsondata';
import { TextspeechPage  } from '../pages/textspeech/textspeech';
import {GooglemapPage} from '../pages/googlemap/googlemap';
import {TeacherPage} from '../pages/teacher/teacher';
// import { BatchlocationPage  } from '../pages/batchlocation/batchlocation';
import {SliderPage} from '../pages/slider/slider';
import { TeachersbatchPage  } from '../pages/teachersbatch/teachersbatch';
import {PaypalPage} from '../pages/paypal/paypal';
import { StripePage  } from '../pages/stripe/stripe';
import { FilterPage  } from '../pages/filter/filter';
// import { ServicesProvider } from '../providers/services/services'; 

//import { RedditDataProvider } from '../providers/reddit-data/reddit-data'; 

@Component({
  templateUrl: 'app.html'
  // providers:[ServicesProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SliderPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      {title:'Login',component:LoginPage},
     {title:'Signup',component:SignupPage},
     {title:'Userdetails',component:UserdetailsPage},
      {title:'Tabs',component:TabsPage},
     {title:'Jsondata',component:JsondataPage },
     {title:'Text to speech',component:TextspeechPage},
     {title:'Googlemap',component:GooglemapPage},
    {title:'Teacher',component:TeacherPage},
    {title:'Batch Location',component:TeachersbatchPage},
    {title:'PayPal',component:PaypalPage},
    {title:'Stripe ',component:StripePage},
    {title:'Filter',component:FilterPage}
    //{title:'Slider',component:SliderPage},
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
