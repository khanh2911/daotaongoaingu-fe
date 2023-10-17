import { TestBed } from '@angular/core/testing';

import { PhanBoThiService } from './phan-bo-thi.service';

describe('PhanBoThiService', () => {
  let service: PhanBoThiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhanBoThiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
