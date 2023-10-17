import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChungChiComponent } from './delete-chung-chi.component';

describe('DeleteChungChiComponent', () => {
  let component: DeleteChungChiComponent;
  let fixture: ComponentFixture<DeleteChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChungChiComponent]
    });
    fixture = TestBed.createComponent(DeleteChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
