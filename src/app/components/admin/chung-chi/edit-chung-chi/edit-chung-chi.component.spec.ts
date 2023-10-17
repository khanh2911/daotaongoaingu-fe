import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChungChiComponent } from './edit-chung-chi.component';

describe('EditChungChiComponent', () => {
  let component: EditChungChiComponent;
  let fixture: ComponentFixture<EditChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChungChiComponent]
    });
    fixture = TestBed.createComponent(EditChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
