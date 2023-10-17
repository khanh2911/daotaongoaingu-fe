import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeclassComponent } from './add-typeclass.component';

describe('AddTypeclassComponent', () => {
  let component: AddTypeclassComponent;
  let fixture: ComponentFixture<AddTypeclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTypeclassComponent]
    });
    fixture = TestBed.createComponent(AddTypeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
