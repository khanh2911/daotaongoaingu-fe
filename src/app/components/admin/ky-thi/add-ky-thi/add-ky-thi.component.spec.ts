import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKyThiComponent } from './add-ky-thi.component';

describe('AddKyThiComponent', () => {
  let component: AddKyThiComponent;
  let fixture: ComponentFixture<AddKyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKyThiComponent]
    });
    fixture = TestBed.createComponent(AddKyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
