import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBacChungChiComponent } from './detail-bac-chung-chi.component';

describe('DetailBacChungChiComponent', () => {
  let component: DetailBacChungChiComponent;
  let fixture: ComponentFixture<DetailBacChungChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBacChungChiComponent]
    });
    fixture = TestBed.createComponent(DetailBacChungChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
