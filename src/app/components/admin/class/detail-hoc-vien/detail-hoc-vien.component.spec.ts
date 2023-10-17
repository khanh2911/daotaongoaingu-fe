import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHocVienComponent } from './detail-hoc-vien.component';

describe('DetailHocVienComponent', () => {
  let component: DetailHocVienComponent;
  let fixture: ComponentFixture<DetailHocVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHocVienComponent]
    });
    fixture = TestBed.createComponent(DetailHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
