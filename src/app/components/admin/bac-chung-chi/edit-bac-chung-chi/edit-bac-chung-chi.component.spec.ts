import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBacChungChiComponent } from './edit-bac-chung-chi.component';

describe('EditBacChungChiComponent', () => {
  let component: EditBacChungChiComponent;
  let fixture: ComponentFixture<EditBacChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBacChungChiComponent]
    });
    fixture = TestBed.createComponent(EditBacChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
