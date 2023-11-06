import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailThongBaoComponent } from './detail-thong-bao.component';

describe('DetailThongBaoComponent', () => {
  let component: DetailThongBaoComponent;
  let fixture: ComponentFixture<DetailThongBaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailThongBaoComponent]
    });
    fixture = TestBed.createComponent(DetailThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
