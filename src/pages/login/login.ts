import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Validators,FormBuilder,FormGroup, FormControl}from "@angular/forms";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
// import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import {FacebookinfoPage} from '../../pages/facebookinfo/facebookinfo';
import { ServicesProvider } from '../../providers/services/services'; 
import {GoogleinfoPage} from '../../pages/googleinfo/googleinfo';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  userlogin:object={}
  email:any
  password:any
  login_form: FormGroup;
 userData:object={}
 obj:object={}
  constructor(private navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,private fb: Facebook, public services: ServicesProvider,private googlePlus: GooglePlus) { 
    this.login_form=formBuilder.group({
      email : ['',Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password : ['',Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(16), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)])]
  })}
 

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.push(SignupPage);
    console.log(JSON.stringify(this.userlogin))
    
  }
  
  fblogin(){
  
    this.fb.login(['public_profile', 'user_friends', 'email'])
 .then(
      (res: FacebookLoginResponse) => 
      { console.log('Logged into Facebook!', res)
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
       console.log(this.userData)
       this.services.fbdata=this.userData;
       this.navCtrl.push(FacebookinfoPage)
     
        });

  })
  .catch(e => console.log('Error logging into Facebook', e));}



  google(){
    this.googlePlus.login({})
    .then(res => {
     console.log(res)
     this.obj['email']=res.email
     this.obj['username']=res.displayName
     this.obj['imgUrl']=res.imageUrl
     console.log(this.obj)
     this.services.googleobj=this.obj
     this.navCtrl.push(GoogleinfoPage)
    }

  
  )
    .catch(err => console.error(err));
  }


share(){
  this.fb.showDialog(  {
    method: 'share',
    href: 'http://example.com',
    caption: 'Such caption, very feed.',
    description: 'Much description',
    picture: 'http://example.com/image.png'
  })

}


}