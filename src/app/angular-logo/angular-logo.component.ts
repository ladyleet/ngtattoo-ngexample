import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-angular-logo',
  templateUrl: 'angular-logo.component.html',
  styleUrls: ['angular-logo.component.css'],
  template: `
    <img src="/img/angular.png">
  `
})
export class AngularLogoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}