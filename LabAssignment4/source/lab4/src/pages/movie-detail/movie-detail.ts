import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UClassifyService } from '../../services/rest/uclassify-service';
import { Screenshot } from '@ionic-native/screenshot';


@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie;
  positive;
  negative;

  screen: any;
  state: boolean = false;  

  constructor(private screenshot: Screenshot ,private uclassifyService: UClassifyService, public navCtrl: NavController, public navParams: NavParams) {
  	this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  reset() {
    var self = this;
    setTimeout(function() {
      self.state = false;
    }, 1000)
  }

  screenShot(){
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    })
  }

  screenShotURI(){
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    })
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