import { Component,AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Validators,FormBuilder,FormGroup, FormControl}from "@angular/forms";
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import {} from '@types/googlemaps';


import { LoginPage } from '../login/login';
import { UserdetailsPage } from '../userdetails/userdetails';
// import {PeopleService} from '../../providers/people-service/people-service';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  //providers: [PeopleServiceProvider],
})
export class SignupPage {
  usersignup :object={}
  Firstname:any
  signup_form:FormGroup;
 index:any;
 imgSrc : string = "./assets/img/18.png";

 
 
  constructor(public navCtrl: NavController,private camera: Camera, public navParams: NavParams,public formBuilder: FormBuilder,public services: ServicesProvider,private actionSheet: ActionSheet) {
    this.signup_form=formBuilder.group({
      Firstname : ['',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)])],
      Lastname : ['',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)])],
      // dob : ['',Validators.compose([Validators.required,])],
      email : ['',Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      mobile:['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(13)])],
      address:['',Validators.compose([Validators.required,])],
      age:['',Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(2)])],
      company:['',Validators.compose([Validators.required])],
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
}


ngAfterViewInit(){
  // let id = document.getElementById('img')
  //let input_from =  (<HTMLInputElement>document.getElementById('address'));
  
   
  let input_from = document.getElementById('address').getElementsByTagName('input')[0];
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
      self.usersignup['address'] = place.formatted_address
        console.log(place.formatted_address)
      
       //console.log(geometry.location.lng());
      
      // console.log(geometry.location.lat());
      }
      });           
  }


  signup(){
    this.navCtrl.push(UserdetailsPage);
    this.services.userobj=this.usersignup;
    console.log(JSON.stringify(this.services.userobj))
  }

  login(){
    this.navCtrl.push(LoginPage);
    
  }

upload(){
  let buttonLabels = [' via Camera', ' via Gallery'];
  const options: ActionSheetOptions = {
    title: 'How do you want to upload image?',
    subtitle: 'Choose an action',
    buttonLabels: buttonLabels,
    addCancelButtonWithLabel: 'Cancel',
    
    //addDestructiveButtonWithLabel: 'Delete',
    androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
    destructiveButtonLast: true
  };
  
  this.actionSheet.show(options).then((buttonIndex: number) => {
    var index=buttonIndex;
 console.log(index)
    if(index==1)
    {
      this.camerafnc();
       console.log('camera vala')
    }
    else if(index==2)
    {
       this.galleryfnc();
       console.log('gallery vala')
    }
 
  });
}

camerafnc()
{
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.imgSrc=base64Image
   this.usersignup={"img":this.imgSrc}
  }, (err) => {
   // Handle error
  });
}

galleryfnc()
 {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType:0,
    allowEdit: true,
    mediaType: this.camera.MediaType.PICTURE,
    //PictureSourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.imgSrc=base64Image
   this.usersignup={"img":this.imgSrc}
  }, (err) => {
   // Handle error
  });

}

}
