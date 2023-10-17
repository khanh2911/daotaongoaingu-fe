import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBacChungChiComponent } from './delete-bac-chung-chi.component';

describe('DeleteBacChungChiComponent', () => {
  let component: DeleteBacChungChiComponent;
  let fixture: ComponentFixture<DeleteBacChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBacChungChiComponent]
    });
    fixture = TestBed.createComponent(DeleteBacChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
