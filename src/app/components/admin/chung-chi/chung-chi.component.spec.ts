import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChungChiComponent } from './chung-chi.component';

describe('ChungChiComponent', () => {
  let component: ChungChiComponent;
  let fixture: ComponentFixture<ChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChungChiComponent]
    });
    fixture = TestBed.createComponent(ChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
