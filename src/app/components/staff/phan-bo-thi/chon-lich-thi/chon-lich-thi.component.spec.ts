import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonLichThiComponent } from './chon-lich-thi.component';

describe('ChonLichThiComponent', () => {
  let component: ChonLichThiComponent;
  let fixture: ComponentFixture<ChonLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChonLichThiComponent]
    });
    fixture = TestBed.createComponent(ChonLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
