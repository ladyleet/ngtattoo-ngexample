/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AngularLogoComponent } from './angular-logo.component';

describe('Component: AngularLogo', () => {
  it('should create an instance', () => {
    let component = new AngularLogoComponent();
    expect(component).toBeTruthy();
  });
});
