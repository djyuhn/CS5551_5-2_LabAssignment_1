import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UClassifyService } from '../../services/rest/uclassify-service';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  analysis: {};

  constructor(private uclassifyService: UClassifyService, public navCtrl: NavController, public navParams: NavParams) {
  	this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  sentimentAnalysis(event, key) {
    if(event.target.value.length > 2) {
      this.uclassifyService.searchSentiment(event.target.value).subscribe(
          data => {
              this.analysis = data.results; 
              console.log(data);
          },
          err => {
            console.log(err);
          },
          () => console.log('UClassify Sentiment Analysis Complete')
        );
      }
  }

}