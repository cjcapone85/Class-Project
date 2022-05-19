import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  searchUrl="https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false"
  genreUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US"
  results:object;

  constructor(private http: HttpClient, private searchResults: SearchService) {
    this.searchResults.results().subscribe((data) => {
      this.results=data;
    })
  }

  ngOnInit(): void {
  }

  onFetchMovies(searchInput: string) {
    return this.http
     .get(this.genreUrl)
       .subscribe(posts => {
         console.log(posts);
       });
   }

  onSubmit() {
    console.log(this.onSubmit,'submit');
  }

}

// https://api.themoviedb.org/3/movie/550?api_key=74c8fbfdf29b471999f8a5ee6ec15a43

// onFetchMovies(searchInput: string) {
//   this.http
//   .get('https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US')
//     .subscribe(posts => {
//       console.log(posts);
//     });
// }

// https://api.themoviedb.org/3/discover/movie?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en
