import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(  private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
  
    this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK'] 
    }).present();
  }
  
  signInUser() {
  
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
        console.log('got login data ', this.fire.auth.currentUser);
        this.navCtrl.setRoot( TabsPage );
        //user is logged in
    })
    .catch(error =>{
        console.log('got a login error', error)
        this.alert(error.message);
    });
    
    console.log('Would sign in with ', this.user.value, this.password.value);
  
  }

  



}
