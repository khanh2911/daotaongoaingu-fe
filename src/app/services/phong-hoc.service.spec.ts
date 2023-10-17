import { TestBed } from '@angular/core/testing';

import { PhongHocService } from './phong-hoc.service';

describe('PhongHocService', () => {
  let service: PhongHocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongHocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
