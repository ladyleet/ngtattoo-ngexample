import { Component, OnInit } from '@angular/core';
import { Submissions } from './submissions.model';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-get-tattooed',
  templateUrl: 'get-tattooed.component.html',
  styleUrls: ['get-tattooed.component.css'],
  template: `
  <div class="row">
    <form #myForm="ngForm" (ngSubmit)="submitForm(myForm)" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input [(ngModel)]= "submissions.firstName" name="first_name" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input [(ngModel)]= "submissions.lastName" name="last_name" id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input [(ngModel)]= "submissions.email" name="email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
      <button class="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
      </div>
    </form>
  </div>
  `
})
export class GetTattooedComponent implements OnInit {

  submissions: Submissions = { firstName: '', lastName: '', email: '' };

  constructor() {}

  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
   alert(JSON.stringify(myForm.value));
   }
}
