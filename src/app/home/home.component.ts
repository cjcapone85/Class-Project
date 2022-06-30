import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { delay, map, Observable } from 'rxjs';
import { Movie } from '../searchResults.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  Img_URL = 'https://image.tmdb.org/t/p/w500';
  base_URL = "https://api.themoviedb.org/3"
  multiSearch = "/search/multi?"
  apiKey:string = "api_key=74c8fbfdf29b471999f8a5ee6ec15a43";
  query:string =`query=${""}`;

  topMoviesUrl="https://api.themoviedb.org/3/trending/all/week?api_key=74c8fbfdf29b471999f8a5ee6ec15a43"
  // searchUrl=`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'batman'}&page=1&include_adult=false`
  genreUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US"
  results: any;


  main = document.getElementById('main');


  constructor(private http: HttpClient, private searchResults: SearchService) {


  }

  ngOnInit(): void {

    this.searchResults.results().subscribe((data) => {

    })

  }

  onFetchMovies(searchInput: string) {

    this.http
     .get(`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${searchInput}&page=1&include_adult=false`)
       .subscribe(data => {
          let results = Object.keys(data).map(a => data[a])
          this.results=results[1];
          console.log(data);
       });
   }


  imagePath() {
    window.location.href=`${this.Img_URL}+${this.results.poster_path}`;
  }

 }
