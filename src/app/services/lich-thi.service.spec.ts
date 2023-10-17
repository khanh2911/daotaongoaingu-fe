import { TestBed } from '@angular/core/testing';

import { LichThiService } from './lich-thi.service';

describe('LichThiService', () => {
  let service: LichThiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichThiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
