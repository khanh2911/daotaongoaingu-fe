import { TestBed } from '@angular/core/testing';

import { KetQuaThiService } from './ket-qua-thi.service';

describe('KetQuaThiService', () => {
  let service: KetQuaThiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KetQuaThiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
