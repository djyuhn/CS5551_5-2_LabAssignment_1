import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { MovieService } from '../services/rest/movie-service';
import { UClassifyService } from '../services/rest/uclassify-service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
    apiKey: "AIzaSyDa40yx7oy1d3c15op6nieX6VBtzvrNwkg",
    authDomain: "labassignment4-cdfd2.firebaseapp.com",
    databaseURL: "https://labassignment4-cdfd2.firebaseio.com",
    projectId: "labassignment4-cdfd2",
    storageBucket: "labassignment4-cdfd2.appspot.com",
    messagingSenderId: "888327214903"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    MovieDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    UClassifyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
