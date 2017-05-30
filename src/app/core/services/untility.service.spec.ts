import { TestBed, inject } from '@angular/core/testing';

import { UntilityService } from './untility.service';

describe('UntilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UntilityService]
    });
  });

  it('should ...', inject([UntilityService], (service: UntilityService) => {
    expect(service).toBeTruthy();
  }));
});
