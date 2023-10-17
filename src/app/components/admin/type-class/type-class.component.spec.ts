import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeClassComponent } from './type-class.component';

describe('TypeClassComponent', () => {
  let component: TypeClassComponent;
  let fixture: ComponentFixture<TypeClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeClassComponent]
    });
    fixture = TestBed.createComponent(TypeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
