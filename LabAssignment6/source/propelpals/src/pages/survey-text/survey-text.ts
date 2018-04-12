import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';

import { SurveyJS } from '../../providers/survey/survey';

import { SurveyResultsModel } from '../../models/survey.results.model';

import * as papa from 'papaparse';

/**
 * Generated class for the SurveyTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey-text',
  templateUrl: 'survey-text.html',
})
export class SurveyTextPage {

	currentYear = new Date().getFullYear();
  survey: any;
  keys: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public surveyJS: SurveyJS,
        public loadingCtrl: LoadingController, public modalCtrl: ModalController, public alertCtrl: AlertController) {

    this.survey = this.navParams.get('survey');
    this.survey.publicSurveyURL = 'https://surveyjs.io/Results/Survey/' + this.survey.Id;
  }

  	ionViewDidLoad() {
		//console.log('ionViewDidLoad SurveyResultsPage');
	  }
}
