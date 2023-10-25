import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGiaoVienRaDeComponent } from './detail-giao-vien-ra-de.component';

describe('DetailGiaoVienRaDeComponent', () => {
  let component: DetailGiaoVienRaDeComponent;
  let fixture: ComponentFixture<DetailGiaoVienRaDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGiaoVienRaDeComponent]
    });
    fixture = TestBed.createComponent(DetailGiaoVienRaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
