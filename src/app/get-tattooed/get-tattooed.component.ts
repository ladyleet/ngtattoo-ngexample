import { Component, OnInit, OnDestroy } from '@angular/core';
import { Submissions } from './submissions.model';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  moduleId: module.id,
  selector: 'app-get-tattooed',
  templateUrl: 'get-tattooed.component.html',
  styleUrls: ['get-tattooed.component.css'],
  template: `
  <div class="row">
    <form #myForm="ngForm" (ngSubmit)="submit$.next(myForm)" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input (keyup)="first$.next($event)" [(ngModel)]= "submissions.firstName" name="first_name" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input (keyup)="last$.next($event)" [(ngModel)]= "submissions.lastName" name="last_name" id="last_name" type="text" class="validate">
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
export class GetTattooedComponent implements OnInit, OnDestroy {

  submissions: Submissions = { firstName: '', lastName: '', email: '' };

  submit$: Subject<NgForm> = new Subject<NgForm>();

  first$: Subject<any> = new Subject<any>();

  last$: Subject<any> = new Subject<any>();

  subscription: Subscription;

  subscription2: Subscription;

  constructor() {}
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.submit$.throttleTime(2000)
      .subscribe((myForm:NgForm) => alert(JSON.stringify(myForm.value)));


    this.subscription2 = this.first$
      .combineLatest(this.last$)
      .map(([a, b]) => [a.target.value, b.target.value])
      .filter(([first, last]) => first === 'Tracy' && last === 'Lee')
      .subscribe((arr) => console.log(arr))
  }
}
