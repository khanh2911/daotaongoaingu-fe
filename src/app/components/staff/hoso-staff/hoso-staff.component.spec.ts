import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosoStaffComponent } from './hoso-staff.component';

describe('HosoStaffComponent', () => {
  let component: HosoStaffComponent;
  let fixture: ComponentFixture<HosoStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosoStaffComponent]
    });
    fixture = TestBed.createComponent(HosoStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
