import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHosostaffComponent } from './edit-hosostaff.component';

describe('EditHosostaffComponent', () => {
  let component: EditHosostaffComponent;
  let fixture: ComponentFixture<EditHosostaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHosostaffComponent]
    });
    fixture = TestBed.createComponent(EditHosostaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
