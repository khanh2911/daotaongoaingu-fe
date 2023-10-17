import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGiaoVienComponent } from './detail-giao-vien.component';

describe('DetailGiaoVienComponent', () => {
  let component: DetailGiaoVienComponent;
  let fixture: ComponentFixture<DetailGiaoVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGiaoVienComponent]
    });
    fixture = TestBed.createComponent(DetailGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
