import { TestBed, inject } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UntilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService]
    });
  });

  it('should ...', inject([UtilityService], (service: UtilityService) => {
    expect(service).toBeTruthy();
  }));
});
