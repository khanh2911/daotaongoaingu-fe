import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChungChiComponent } from './add-chung-chi.component';

describe('AddChungChiComponent', () => {
  let component: AddChungChiComponent;
  let fixture: ComponentFixture<AddChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChungChiComponent]
    });
    fixture = TestBed.createComponent(AddChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
