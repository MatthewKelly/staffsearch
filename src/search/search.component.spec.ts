import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { PeopleSearchComponent } from './search.component';

describe('Search', () => {
  beforeEachProviders(() => [
    PeopleSearchComponent
  ]);
  it ('People should be populated', inject([PeopleSearchComponent], (app: PeopleSearchComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
