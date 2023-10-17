import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapDiemHocVienComponent } from './nhap-diem-hoc-vien.component';

describe('NhapDiemHocVienComponent', () => {
  let component: NhapDiemHocVienComponent;
  let fixture: ComponentFixture<NhapDiemHocVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhapDiemHocVienComponent]
    });
    fixture = TestBed.createComponent(NhapDiemHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
