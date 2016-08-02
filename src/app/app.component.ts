import { Component } from '@angular/core';
import { AngularLogo2Component } from './angular-logo2';
import { TattooCardComponent } from './tattoo-card';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ AngularLogo2Component, TattooCardComponent, ROUTER_DIRECTIVES ],
  template: `
    <nav>
      <div class="nav-wrapper red">
        <a href="#" class="brand-logo">ng-tattoo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/tattooed">Tattooed</a></li>
        </ul>
      </div>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
    <div class="center-align">
      <app-angular-logo2></app-angular-logo2>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
