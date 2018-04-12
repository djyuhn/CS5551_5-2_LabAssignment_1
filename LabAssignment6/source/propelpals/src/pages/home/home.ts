import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import {ProfilePage} from  '../profile/profile';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    email: string;
    password: string;
    public items: Array<any> = [];
    public myPerson: object = {};

  constructor( private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
    this.email = fire.auth.currentUser.email;
    this.items = this.email.split('@');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
    const personRef: firebase.database.Reference = firebase.database().ref('/'+ this.items[0] +'/');
    
    personRef.on('value', personSnapshot => {
        this.myPerson = personSnapshot.val();
        return false;
    });
  }
  edit(){
    this.navCtrl.setRoot( ProfilePage );
  
  }

}
