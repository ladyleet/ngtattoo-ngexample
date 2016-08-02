import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Person } from './person';


@Component({
  moduleId: module.id,
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
  styleUrls: ['about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  person: Person={lastName:'', firstName:''};

  constructor() {}

  ngOnInit() {
  }

  submitTattoo(tattooForm:NgForm) {
    alert(JSON.stringify(tattooForm.value));
    alert((<Person>tattooForm.value)['lastName']);
  }

}
