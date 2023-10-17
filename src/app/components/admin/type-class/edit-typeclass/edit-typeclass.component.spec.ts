import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeclassComponent } from './edit-typeclass.component';

describe('EditTypeclassComponent', () => {
  let component: EditTypeclassComponent;
  let fixture: ComponentFixture<EditTypeclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTypeclassComponent]
    });
    fixture = TestBed.createComponent(EditTypeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
