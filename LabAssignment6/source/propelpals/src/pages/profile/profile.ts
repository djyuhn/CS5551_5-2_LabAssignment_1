import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  email: string;
  name: string;

	profile = {} as Profile;
  constructor(private fire: AngularFireAuth,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
  	public navCtrl: NavController, public navParams: NavParams) {
  
      this.email = fire.auth.currentUser.email;
      this.name=this.email.substring(0, this.email.indexOf("@"));
      
  }


  createProfile(){
  		this.afAuth.authState.take(1).subscribe(auth => {
  			this.afDatabase.object(`${this.name}`).set(this.profile)
  		  	.then(() => this.navCtrl.setRoot( TabsPage ))
      })
      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    

  }

}
