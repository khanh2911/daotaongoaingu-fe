import { TestBed } from '@angular/core/testing';

import { PhanCongGiangDayService } from './phan-cong-giang-day.service';

describe('PhanCongGiangDayService', () => {
  let service: PhanCongGiangDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhanCongGiangDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
