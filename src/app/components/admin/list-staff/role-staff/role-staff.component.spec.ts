import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleStaffComponent } from './role-staff.component';

describe('RoleStaffComponent', () => {
  let component: RoleStaffComponent;
  let fixture: ComponentFixture<RoleStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleStaffComponent]
    });
    fixture = TestBed.createComponent(RoleStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
