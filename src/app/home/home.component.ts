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

  private fetchPosts() {
    this.http.get(
      'https://api.themoviedb.org/3/movie/550?api_key=74c8fbfdf29b471999f8a5ee6ec15a43')
      .subscribe(posts => {
        console.log(posts);
      });
  }

}
