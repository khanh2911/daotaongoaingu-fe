import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHosoComponent } from './edit-hoso.component';

describe('EditHosoComponent', () => {
  let component: EditHosoComponent;
  let fixture: ComponentFixture<EditHosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHosoComponent]
    });
    fixture = TestBed.createComponent(EditHosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
