import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./searchResults.model";


@Injectable({
  providedIn: "root",
})

export class SearchService {
  search:any;
  apiKey:string = "74c8fbfdf29b471999f8a5ee6ec15a43";
  baseUrl= "https://api.themoviedb.org/3"
  topMoviesUrl="https://api.themoviedb.org/3/trending/all/week?api_key=74c8fbfdf29b471999f8a5ee6ec15a43"
  searchUrl="https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&page=1&include_adult=false"
  genreUrl='https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US'
  imageUrl='https://api.themoviedb.org/3/collection/{collection_id}/images?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US'
  detailsUrl='https://api.themoviedb.org/3/collection/{collection_id}?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US'


  constructor(private http: HttpClient) { }

  titleSearch() {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${'name'}&page=1&include_adult=false`)
  }



  results(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.genreUrl)
  }
}
