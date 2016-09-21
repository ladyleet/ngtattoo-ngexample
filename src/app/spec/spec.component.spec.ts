/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SpecComponent } from './spec.component';

describe('Component: Spec', () => {
  it('should create an instance', () => {
    let component = new SpecComponent();
    expect(component).toBeTruthy();
  });
});
