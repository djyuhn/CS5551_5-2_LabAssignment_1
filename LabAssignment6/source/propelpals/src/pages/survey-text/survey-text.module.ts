import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyTextPage } from './survey-text';

@NgModule({
  declarations: [
    SurveyTextPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyTextPage),
  ],
})
export class SurveyTextPageModule {}
