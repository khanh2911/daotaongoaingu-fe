import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachPhongThiComponent } from './danh-sach-phong-thi.component';

describe('DanhSachPhongThiComponent', () => {
  let component: DanhSachPhongThiComponent;
  let fixture: ComponentFixture<DanhSachPhongThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhSachPhongThiComponent]
    });
    fixture = TestBed.createComponent(DanhSachPhongThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
