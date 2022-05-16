import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.onSubmit,'submit');
  }

  onFetchMovies(searchInput: string) {
    // const formattedQuery = searchInput.split(' ').join('+').toLowerCase();
    this.http
    .get('https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US')
      .subscribe(posts => {
        console.log(posts);
      });
  }

}

// https://api.themoviedb.org/3/movie/550?api_key=74c8fbfdf29b471999f8a5ee6ec15a43

// onFetchMovies(searchInput: string) {
//   // const formattedQuery = searchInput.split(' ').join('+').toLowerCase();
//   this.http
//   .get('https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US')
//     .subscribe(posts => {
//       console.log(posts);
//     });
// }

// https://api.themoviedb.org/3/discover/movie?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en
