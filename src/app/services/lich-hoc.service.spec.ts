import { TestBed } from '@angular/core/testing';

import { LichHocService } from './lich-hoc.service';

describe('LichHocService', () => {
  let service: LichHocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichHocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
