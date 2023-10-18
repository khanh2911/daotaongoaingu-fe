import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichDayComponent } from './lich-day.component';

describe('LichDayComponent', () => {
  let component: LichDayComponent;
  let fixture: ComponentFixture<LichDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LichDayComponent]
    });
    fixture = TestBed.createComponent(LichDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
