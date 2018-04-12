import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController, ItemSliding } from 'ionic-angular';

import { SurveyJS } from '../../providers/survey/survey';
import { SurveyARPage } from '../survey-ar/survey-ar';
import { SurveyTextPage} from '../survey-text/survey-text';

import { SurveyModel } from "../../models/survey.model";

import { ApiWrapper } from '../../providers/survey/api-wrapper';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';



@Component({
  selector: 'page-survey-home',
  templateUrl: 'survey-home.html'
})
export class SurveyHomePage {

    surveys: SurveyModel[];
    archiveSurveys: SurveyModel[];
    defaultImages: any;
    noSurveys: boolean = false;
    currentYear = new Date().getFullYear();

    constructor(public navCtrl: NavController, public surveyJS: SurveyJS,
                public loadingCtrl: LoadingController, public alertCtrl: AlertController, public apiWrapper: ApiWrapper) {
        //this.getActiveSurveys();
        //this.getArchiveSurveys();
        this.getSurveys();


        // TO TEST API WRAPPER UNCOMMENT THIS CODE. 
        
        this.apiWrapper.api.surveys.get('getActive', { accessKey: true, ownerId: true }).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(<any>error);
            }
        );
        
 
    }

  navigateAR(survey) {
        this.navCtrl.push(SurveyARPage, {
          survey: survey
        });
    }

  navigateText(survey) {
        this.navCtrl.push(SurveyTextPage, {
          survey: survey
        });
    }

  getSurveys() {
        let loading = this.loadingCtrl.create({
            content: "Loading Surveys..."
        });
        loading.present();
        Observable.forkJoin(this.surveyJS.getActiveSurveys(), this.surveyJS.getArchiveSurveys())
            .subscribe(data => {
                //console.log(data);
                this.surveys = SurveyModel.fromJSONArray(data[0]);
                this.archiveSurveys = SurveyModel.fromJSONArray(data[1]);
                loading.dismiss();
            },
            error => {
                console.log(<any>error);
                if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error")) this.noSurveys = true;
                loading.dismiss();
            });
    }

  getActiveSurveys() {
        let loading = this.loadingCtrl.create({
            content: "Loading Surveys..."
        });

        loading.present();

        this.surveyJS.getActiveSurveys()
            .subscribe(
                data => {
                    //console.log(data);
                    //this.surveys = data;
                    this.surveys = SurveyModel.fromJSONArray(data);
                    loading.dismiss();
                },
                error => {
                    console.log(<any>error);
                    if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error")) this.noSurveys = true;
                    loading.dismiss();
            }
        );
    }

}