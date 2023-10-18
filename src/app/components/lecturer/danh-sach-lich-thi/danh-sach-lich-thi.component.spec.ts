import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachLichThiComponent } from './danh-sach-lich-thi.component';

describe('DanhSachLichThiComponent', () => {
  let component: DanhSachLichThiComponent;
  let fixture: ComponentFixture<DanhSachLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhSachLichThiComponent]
    });
    fixture = TestBed.createComponent(DanhSachLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
