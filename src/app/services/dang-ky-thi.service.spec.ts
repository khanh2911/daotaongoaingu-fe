import { TestBed } from '@angular/core/testing';

import { DangKyThiService } from './dang-ky-thi.service';

describe('DangKyThiService', () => {
  let service: DangKyThiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DangKyThiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
