import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDiemComponent } from './chi-tiet-diem.component';

describe('ChiTietDiemComponent', () => {
  let component: ChiTietDiemComponent;
  let fixture: ComponentFixture<ChiTietDiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiTietDiemComponent]
    });
    fixture = TestBed.createComponent(ChiTietDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
