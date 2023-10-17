import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHocVienComponent } from './danh-sach-hoc-vien.component';

describe('DanhSachHocVienComponent', () => {
  let component: DanhSachHocVienComponent;
  let fixture: ComponentFixture<DanhSachHocVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhSachHocVienComponent]
    });
    fixture = TestBed.createComponent(DanhSachHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
