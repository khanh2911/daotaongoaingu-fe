import { TestBed } from '@angular/core/testing';

import { KyThiService } from './ky-thi.service';

describe('KyThiService', () => {
  let service: KyThiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KyThiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
