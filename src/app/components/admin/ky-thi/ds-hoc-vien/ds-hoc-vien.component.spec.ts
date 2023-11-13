import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHocVienComponent } from './ds-hoc-vien.component';

describe('DsHocVienComponent', () => {
  let component: DsHocVienComponent;
  let fixture: ComponentFixture<DsHocVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsHocVienComponent]
    });
    fixture = TestBed.createComponent(DsHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
