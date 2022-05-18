import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})

export class QueueService {
  search:any;
  searchUrl="https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&page=1&include_adult=false"
  genreUrl='https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US'

  constructor(private http: HttpClient) {}
  results() {
    return this.http.get(this.genreUrl)
  }
}
