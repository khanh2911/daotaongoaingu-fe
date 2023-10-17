import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHosogvComponent } from './edit-hosogv.component';

describe('EditHosogvComponent', () => {
  let component: EditHosogvComponent;
  let fixture: ComponentFixture<EditHosogvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHosogvComponent]
    });
    fixture = TestBed.createComponent(EditHosogvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
