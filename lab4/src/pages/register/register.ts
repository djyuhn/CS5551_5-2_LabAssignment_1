import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import firebase from 'firebase';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('firstName') firstName;
  @ViewChild('lastName') lastName;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  createUser(firstName: string, lastName: string, username: string): void {
    firebase.database().ref('/users/').child(firebase.auth().currentUser.uid).set({
        firstName,
        lastName,
        username
    })
  }
  
  alert(message: string) {
    this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK']
    }).present();
  }
  
  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then(data => {
        console.log('got data ', data);
        
        this.createUser(this.firstName.value, this.lastName.value, this.user.value);
        
        this.alert('Registered!');
        this.navCtrl.setRoot( LoggedinPage );
        // user is registered
    })
    .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
    });
    
    console.log('Would register user with ', this.user.value, this.password.value)
  }

}
