import { TestBed } from '@angular/core/testing';

import { ApiHelpmeService } from './api-helpme.service';

describe('ApiHelpmeService', () => {
  let service: ApiHelpmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHelpmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
