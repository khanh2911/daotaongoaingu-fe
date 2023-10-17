import { TestBed } from '@angular/core/testing';

import { BacChungChiService } from './bac-chung-chi.service';

describe('BacChungChiService', () => {
  let service: BacChungChiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacChungChiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
