import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { delay, map, Observable } from 'rxjs';
import { Movie } from '../searchResults.model';
// import { SearchResults } from '../searchResults.model'


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
  searchUrl= this.base_URL+this.multiSearch+this.apiKey+this.query;
  // searchUrl=`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'batman'}&page=1&include_adult=false`
  genreUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US"
  results: any;


  main = document.getElementById('main');
  // results:object = this.http.get(this.searchUrl)


  constructor(private http: HttpClient, private searchResults: SearchService) {


  }

  ngOnInit(): void {

    this.searchResults.results().subscribe((data) => {

    })

  }

  onFetchMovies(searchInput: string) {

    this.http
     .get(this.searchUrl)
       .subscribe(data => {
          let results = Object.keys(data).map(a => data[a])
          this.results=results[1];
          console.log(data);
       });
   }


  imagePath() {
    window.location.href=`${this.Img_URL}+${this.results.poster_path}`;
  }

  // getColor(vote_average) {
  //   if(vote_average >= 8){
  //     return 'green'
  //   }else if(vote_average >= 5){
  //     return 'orange'
  //   }else{
  //     return 'red'
  //   }
  // }

}


  //  search() {
  //   return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${'name'}&page=1&include_adult=false`)
  // }

  // onSubmit() {
  //   return this.http.get(this.searchUrl).subscribe
  //   // console.log(this.onSubmit,'submit');
  // }

  // getColor(vote) {
  //   if(vote >= 8){
  //     return 'green'
  //   }else if(vote >= 5){
  //     return 'orange'
  //   }else{
  //     return 'red'
  //   }
  // }

//  }



// onFetchMovies(searchInput: string) {
//   this.http
//   .get('https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US')
//     .subscribe(posts => {
//       console.log(posts);
//     });


