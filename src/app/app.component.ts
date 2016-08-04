import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
    <nav>
      <div class="nav-wrapper red">
        <a href="#" class="brand-logo center">ng-tattoo</a>
        <ul id="nav-mobile" class="right">
          <li><a routerLink="/tattooed">Tattooed</a></li>
          <li><a routerLink="/get-tattooed">Get Tattooed</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </div>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
