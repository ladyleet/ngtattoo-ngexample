import { Component } from '@angular/core';
import { AngularLogoComponent } from './angular-logo';
import { TattooCardComponent } from './tattoo-card';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ AngularLogoComponent, TattooCardComponent, ROUTER_DIRECTIVES ],
  template: `
    <nav>
      <div class="nav-wrapper red">
        <a href="#" class="brand-logo">ng-tattoo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/tattooed">The Branded</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </div>
    </nav>

    <div>
      <router-outlet></router-outlet>
    </div>

    <div class="center-align">
      <app-angular-logo></app-angular-logo>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
