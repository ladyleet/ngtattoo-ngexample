import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tattoo-card',
  templateUrl: 'tattoo-card.component.html',
  styleUrls: ['tattoo-card.component.css'],
  template: `
  <div class="row">
    <div *ngFor="let tattoo of tattoos" class="col s12 m6 l3">
     <div class="card">
       <div class="card-image">
         <img src="/img/ngtattoo-{{tattoo.number}}.jpg">
         <span class="card-title">{{tattoo.twitter}}</span>
       </div>
     </div>
    </div>
  </div>
  `
})
export class TattooCardComponent implements OnInit {

  tattoos: Object[] = [
    { number: '1', twitter: '@jakeherringbone'},
    { number: '2', twitter: '@synalx'},
    { number: '3', twitter: '@benlesh'},
    { number: '4'},
    { number: '5'},
    { number: '6'},
    { number: '7'},
    { number: '8'},
    { number: '9'},
    { number: '10'},
  ];

  constructor() {}

  ngOnInit() {
  }

}
