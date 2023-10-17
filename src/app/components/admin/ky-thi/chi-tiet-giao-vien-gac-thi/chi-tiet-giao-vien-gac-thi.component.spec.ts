import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietGiaoVienGacThiComponent } from './chi-tiet-giao-vien-gac-thi.component';

describe('ChiTietGiaoVienGacThiComponent', () => {
  let component: ChiTietGiaoVienGacThiComponent;
  let fixture: ComponentFixture<ChiTietGiaoVienGacThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiTietGiaoVienGacThiComponent]
    });
    fixture = TestBed.createComponent(ChiTietGiaoVienGacThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
