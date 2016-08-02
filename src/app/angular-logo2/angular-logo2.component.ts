import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-angular-logo2',
  templateUrl: 'angular-logo2.component.html',
  styleUrls: ['angular-logo2.component.css'],
  template: `
    <div>
      <img src="/img/angular.png">
    </div>
  `
})
export class AngularLogo2Component implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
