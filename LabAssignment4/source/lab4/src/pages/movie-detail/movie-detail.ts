import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UClassifyService } from '../../services/rest/uclassify-service';


@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie;
  positive;
  negative;

  constructor(private uclassifyService: UClassifyService, public navCtrl: NavController, public navParams: NavParams) {
  	this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  sentimentAnalysis(movieDescription) {
      this.uclassifyService.searchSentiment(movieDescription).subscribe(
          data => {
              this.negative = data.negative;
              this.negative *= 100;
              this.positive = data.positive;
              this.positive *= 100;
              console.log(data);
          },
          err => {
            console.log(err);
          },
          () => console.log('UClassify Sentiment Analysis Complete')
        );
    }
}