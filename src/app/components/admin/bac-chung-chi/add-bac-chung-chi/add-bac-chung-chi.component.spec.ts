import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBacChungChiComponent } from './add-bac-chung-chi.component';

describe('AddBacChungChiComponent', () => {
  let component: AddBacChungChiComponent;
  let fixture: ComponentFixture<AddBacChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBacChungChiComponent]
    });
    fixture = TestBed.createComponent(AddBacChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
