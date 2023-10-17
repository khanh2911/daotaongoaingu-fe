import { TestBed } from '@angular/core/testing';

import { LopHocService } from './lop-hoc.service';

describe('LopHocService', () => {
  let service: LopHocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LopHocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
