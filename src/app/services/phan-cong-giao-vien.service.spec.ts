import { TestBed } from '@angular/core/testing';

import { PhanCongGiaoVienService } from './phan-cong-giao-vien.service';

describe('PhanCongGiaoVienService', () => {
  let service: PhanCongGiaoVienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhanCongGiaoVienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
