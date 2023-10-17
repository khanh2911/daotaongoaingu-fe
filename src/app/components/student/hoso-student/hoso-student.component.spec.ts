import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosoStudentComponent } from './hoso-student.component';

describe('HosoStudentComponent', () => {
  let component: HosoStudentComponent;
  let fixture: ComponentFixture<HosoStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosoStudentComponent]
    });
    fixture = TestBed.createComponent(HosoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
