import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyKyThiComponent } from './dang-ky-ky-thi.component';

describe('DangKyKyThiComponent', () => {
  let component: DangKyKyThiComponent;
  let fixture: ComponentFixture<DangKyKyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangKyKyThiComponent]
    });
    fixture = TestBed.createComponent(DangKyKyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
