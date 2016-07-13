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
    { number: '1', twitter: "@jakeherringbone"},
    { number: '2', twitter: "@synalx"},
    { number: '3', twitter: "@benlesh"},
    { number: '4', twitter: "@samccone"},
    { number: '5', twitter: "@ladyleet"},
    { number: '6', twitter: "@gerardsans"},
    { number: '7', twitter: "@aysegulyonet"},
    { number: '8', twitter: "@gdi2290"},
    { number: '9', twitter: "@thejameskyle"},
    { number: '10', twitter: "@wnodom"},
    { number: '11', twitter: "@pascalprecht"},
    { number: '12', twitter: "@urishaked"}
  ];

  constructor() {}

  ngOnInit() {
  }

}
