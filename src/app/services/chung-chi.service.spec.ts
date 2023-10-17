import { TestBed } from '@angular/core/testing';

import { ChungChiService } from './chung-chi.service';

describe('ChungChiService', () => {
  let service: ChungChiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChungChiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
