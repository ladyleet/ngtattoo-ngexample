/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TattooCardComponent } from './tattoo-card.component';

describe('Component: TattooCard', () => {
  it('should create an instance', () => {
    let component = new TattooCardComponent();
    expect(component).toBeTruthy();
  });
});
