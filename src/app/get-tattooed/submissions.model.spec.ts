/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Submissions} from './submissions.model';

describe('Submissions', () => {
  it('should create an instance', () => {
    expect(new Submissions()).toBeTruthy();
  });
});
