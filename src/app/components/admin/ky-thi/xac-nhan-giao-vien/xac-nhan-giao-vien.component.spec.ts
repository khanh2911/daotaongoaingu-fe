import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanGiaoVienComponent } from './xac-nhan-giao-vien.component';

describe('XacNhanGiaoVienComponent', () => {
  let component: XacNhanGiaoVienComponent;
  let fixture: ComponentFixture<XacNhanGiaoVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XacNhanGiaoVienComponent]
    });
    fixture = TestBed.createComponent(XacNhanGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
