/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';

describe('Component: AboutPage', () => {
  it('should create an instance', () => {
    let component = new AboutPageComponent();
    expect(component).toBeTruthy();
  });
});
