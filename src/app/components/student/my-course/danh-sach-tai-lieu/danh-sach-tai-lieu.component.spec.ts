import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachTaiLieuComponent } from './danh-sach-tai-lieu.component';

describe('DanhSachTaiLieuComponent', () => {
  let component: DanhSachTaiLieuComponent;
  let fixture: ComponentFixture<DanhSachTaiLieuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhSachTaiLieuComponent]
    });
    fixture = TestBed.createComponent(DanhSachTaiLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
