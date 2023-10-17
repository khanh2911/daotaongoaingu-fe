import { TestBed } from '@angular/core/testing';

import { LoaiLopService } from './loai-lop.service';

describe('LoaiLopService', () => {
  let service: LoaiLopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaiLopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
