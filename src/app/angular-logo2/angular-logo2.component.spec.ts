/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AngularLogo2Component } from './angular-logo2.component';

describe('Component: AngularLogo2', () => {
  it('should create an instance', () => {
    let component = new AngularLogo2Component();
    expect(component).toBeTruthy();
  });
});
