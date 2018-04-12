import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyHomePage } from './survey-home';

@NgModule({
  declarations: [
    SurveyHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyHomePage),
  ],
})
export class SurveyHomePageModule {}
