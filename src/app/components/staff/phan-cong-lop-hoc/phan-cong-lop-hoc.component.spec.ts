import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanCongLopHocComponent } from './phan-cong-lop-hoc.component';

describe('PhanCongLopHocComponent', () => {
  let component: PhanCongLopHocComponent;
  let fixture: ComponentFixture<PhanCongLopHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanCongLopHocComponent]
    });
    fixture = TestBed.createComponent(PhanCongLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
