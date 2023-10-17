import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacChungChiComponent } from './bac-chung-chi.component';

describe('BacChungChiComponent', () => {
  let component: BacChungChiComponent;
  let fixture: ComponentFixture<BacChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacChungChiComponent]
    });
    fixture = TestBed.createComponent(BacChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
