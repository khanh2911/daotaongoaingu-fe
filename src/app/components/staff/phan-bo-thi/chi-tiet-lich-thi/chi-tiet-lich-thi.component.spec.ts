import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietLichThiComponent } from './chi-tiet-lich-thi.component';

describe('ChiTietLichThiComponent', () => {
  let component: ChiTietLichThiComponent;
  let fixture: ComponentFixture<ChiTietLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiTietLichThiComponent]
    });
    fixture = TestBed.createComponent(ChiTietLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
