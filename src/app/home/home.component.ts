import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
<<<<<<< Updated upstream
import { Observable } from 'rxjs';
import { Movies } from '../searchResults.model'
import { MoviesService } from '../movies.service';
=======
import { delay, Observable } from 'rxjs';
import { Movie } from '../searchResults.model';
// import { SearchResults } from '../searchResults.model'
>>>>>>> Stashed changes


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  query = "";
  name: string;
  movieTitle: string;
  movies: Movies[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];
  apiKey:string = "74c8fbfdf29b471999f8a5ee6ec15a43";
  topMoviesUrl="https://api.themoviedb.org/3/trending/all/week?api_key=74c8fbfdf29b471999f8a5ee6ec15a43"
<<<<<<< Updated upstream
  searchUrl=`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'batman'}&page=1&include_adult=false`
  http: any;


  // results:object = this.http.get(this.searchUrl)
=======
  searchUrl=`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'name'}&page=1&include_adult=false`
  genreUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US"
  results:Movie[] = [];
>>>>>>> Stashed changes


  constructor(private moviesService: MoviesService, private httpClient: HttpClient) {
    // this.searchResults.results().subscribe((data) => {
    //   this.results=data;
    // })
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
    // this.searchService.titleSearch().subscribe((movies) => this.movies = movies);
  }

  ngDoCheck(): void {
    if (this.movies.length && !this.watchedMovies.length) {
      this.yetToWatchMovies = this.movies.filter((m) => !m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m) => m.isWatched);
    }
  }

  onFavClick(movie: Movies): void {}
  onWatchedClick(movie: Movies): void {}


  onFetchMovies(searchInput: string) {
    this.http
     .get(this.searchUrl)
       .subscribe(results => {
         console.log(results);
       });
   }

   search() {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${'name'}&page=1&include_adult=false`)
  }

  // result(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.genreUrl)
  // }

  // onSubmit() {
  //   return this.http.get(this.searchUrl).subscribe
  //   // console.log(this.onSubmit,'submit');
  // }

}

