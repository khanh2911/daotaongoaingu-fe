import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanBoThiComponent } from './phan-bo-thi.component';

describe('PhanBoThiComponent', () => {
  let component: PhanBoThiComponent;
  let fixture: ComponentFixture<PhanBoThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanBoThiComponent]
    });
    fixture = TestBed.createComponent(PhanBoThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
