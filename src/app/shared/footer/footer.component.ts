import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  tmdb() {
    window.location.href='https://www.themoviedb.org/';
  }

  githubThree() {
    window.location.href='https://github.com/cjcapone85';
  }

  ngOnInit(): void {
  }

}
