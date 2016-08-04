import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Submissions } from './submissions.model';

@Component({
  moduleId: module.id,
  selector: 'app-get-tattooed',
  templateUrl: 'get-tattooed.component.html',
  styleUrls: ['get-tattooed.component.css'],
  template: `
  <div class="row margin-top-50">
    <form #myForm="ngForm" (ngSubmit) = "submitForm(myForm)" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input [(ngModel)] = "submissions.firstName" id="first_name" name="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input [(ngModel)] = "submissions.lastName" id="last_name" name="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input [(ngModel)] = "submissions.email" id="email" type="email" name="email" class="validate">
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

  submissions: Submissions = { firstName: '', lastName: '', email: '' }

  constructor() {}

  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
    alert(JSON.stringify(myForm.value));
 }

}
