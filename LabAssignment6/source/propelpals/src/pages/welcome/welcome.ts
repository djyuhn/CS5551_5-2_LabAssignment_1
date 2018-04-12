import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

    @ViewChild('username') uname;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController){

  }
  
  signIn(){
  
    this.navCtrl.push(LoginPage);
  
  }
  
  register(){
  
    this.navCtrl.push(RegisterPage);
  
  }

}


