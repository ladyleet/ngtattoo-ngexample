import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tattoo-card',
  templateUrl: 'tattoo-card.component.html',
  styleUrls: ['tattoo-card.component.css'],
  template: `
  <div class="row">
    <div class="col s12 m6 l3">
     <div class="card">
       <div class="card-image">
         <img src="/img/ngtattoo-11.jpg">
         <span class="card-title">link to twitter could go here?</span>
       </div>
     </div>
    </div>
  </div>
  `
})
export class TattooCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
