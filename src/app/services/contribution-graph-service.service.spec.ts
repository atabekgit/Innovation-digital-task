import { TestBed } from '@angular/core/testing';

import { ContributionGraphService } from './contribution-graph.service';

describe('ContributionGraphServiceService', () => {
  let service: ContributionGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributionGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
