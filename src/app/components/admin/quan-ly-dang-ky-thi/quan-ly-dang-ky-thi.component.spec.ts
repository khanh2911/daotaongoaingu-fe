import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDangKyThiComponent } from './quan-ly-dang-ky-thi.component';

describe('QuanLyDangKyThiComponent', () => {
  let component: QuanLyDangKyThiComponent;
  let fixture: ComponentFixture<QuanLyDangKyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyDangKyThiComponent]
    });
    fixture = TestBed.createComponent(QuanLyDangKyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
