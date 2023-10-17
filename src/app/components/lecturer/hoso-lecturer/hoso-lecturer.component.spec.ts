import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosoLecturerComponent } from './hoso-lecturer.component';

describe('HosoLecturerComponent', () => {
  let component: HosoLecturerComponent;
  let fixture: ComponentFixture<HosoLecturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosoLecturerComponent]
    });
    fixture = TestBed.createComponent(HosoLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
