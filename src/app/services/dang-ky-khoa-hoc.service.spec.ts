import { TestBed } from '@angular/core/testing';

import { DangKyKhoaHocService } from './dang-ky-khoa-hoc.service';

describe('DangKyKhoaHocService', () => {
  let service: DangKyKhoaHocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DangKyKhoaHocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
