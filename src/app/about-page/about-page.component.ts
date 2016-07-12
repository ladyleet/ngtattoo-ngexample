import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
  styleUrls: ['about-page.component.css'],
  template: `
    <div>
      <h2 class="red-text">About Page</h2>
      <p>Welcome to ng-tattoo! Hope you enjoy all the tattooed faces on this page. If you'd like to get tattooed too, tweet me <a href="http://twitter.com/ladyleet">@ladyleet</a> and we'll get you set up. :D</p>
    </div>
  `
})
export class AboutPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
