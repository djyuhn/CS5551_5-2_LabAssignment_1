import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from '../interceptors/timing-interceptor';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SurveyHomePage } from '../pages/survey-home/survey-home';
import { SurveyARPage } from '../pages/survey-ar/survey-ar';
import { SurveyTextPage } from '../pages/survey-text/survey-text';

import { ChatsPage} from '../pages/chats/chats';
import { GroupsPage } from '../pages/groups/groups';
import { ProfilesPage } from '../pages/profiles/profiles';
import { BuddychatPage } from '../pages/buddychat/buddychat';

import { UserProvider } from '../providers/users/user';
import { RequestsProvider } from '../providers/requests/requests';
import { ChatProvider } from '../providers/chat/chat';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { SurveyJS } from '../providers/survey/survey';
import { ApiWrapper } from '../providers/survey/api-wrapper';
import { SurveyComponent } from '../components/survey/survey';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import {ProfilePage} from  '../pages/profile/profile'


const firebaseAuth = {
    apiKey: "AIzaSyBjyQenurH7RFfj9iOC34USGn6BWgdG6AI",
    authDomain: "login-project-36e3f.firebaseapp.com",
    databaseURL: "https://login-project-36e3f.firebaseio.com",
    projectId: "login-project-36e3f",
    storageBucket: "login-project-36e3f.appspot.com",
    messagingSenderId: "596843832188"
  };


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    SurveyHomePage,
    SurveyARPage,
    SurveyTextPage,
    SurveyComponent,
    ChatsPage,
    GroupsPage,
    ProfilesPage,
    BuddychatPage,
    ProfilePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    SurveyHomePage,
    SurveyARPage,
    SurveyTextPage,
    ChatsPage,
    GroupsPage,
    ProfilesPage,
    BuddychatPage,
    ProfilePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    SurveyJS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    ApiWrapper,
    HttpClientModule,
    RequestsProvider,
    ChatProvider,
    ImghandlerProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
