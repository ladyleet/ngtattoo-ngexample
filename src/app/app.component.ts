import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
    <nav>
      <div class="nav-wrapper light-blue">
        <a href="#" class="brand-logo center"><img src="/img/angular.png"/></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class AppComponent {
  title = 'app works!';
}
