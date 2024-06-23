import { TestBed } from '@angular/core/testing';

import { WorkflowUserService } from './workflow-user.service';

describe('WorkflowUserService', () => {
  let service: WorkflowUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
