import { TestBed } from '@angular/core/testing';

import { KhoaHocService } from './khoa-hoc.service';

describe('KhoaHocService', () => {
  let service: KhoaHocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhoaHocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
