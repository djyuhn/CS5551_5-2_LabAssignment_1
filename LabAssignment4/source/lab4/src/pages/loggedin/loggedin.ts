import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MovieService } from '../../services/rest/movie-service';
import { MovieDetailPage } from '../movie-detail/movie-detail';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  movies: Array<any>;

  email: string;

  constructor(private fire: AngularFireAuth, private movieService: MovieService, public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  searchForMovie(event, key) {
    if(event.target.value.length > 1) {
      this.movieService.searchMovies(event.target.value).subscribe(
          data => {
              this.movies = data.results; 
              console.log(data);
          },
          err => {
            console.log(err);
          },
          () => console.log('Movie Search Complete')
        );
      }
  }

  selectMovie(event, movie) {
        console.log(movie);  
        this.navCtrl.push(MovieDetailPage, {
            movie: movie
        });

    }
}