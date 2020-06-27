import { TestBed } from '@angular/core/testing';

import { TodoTrackerService } from './todo-tracker.service';

describe('TodoTrackerService', () => {
  let service: TodoTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
