import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
  styleUrls: ['about-page.component.css'],
  template: `
    <div>
      <h2>About ng-tattoo</h2>
      <p>Welcome, this is the about page! :) If you'd like some tattoos, tweet your request to me <a href="http://twitter.com/ladyleet">@ladyleet</a> and I'll send you one. ;) </p>
    </div>
  `
})
export class AboutPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
