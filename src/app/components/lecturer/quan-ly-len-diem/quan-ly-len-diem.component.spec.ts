import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyLenDiemComponent } from './quan-ly-len-diem.component';

describe('QuanLyLenDiemComponent', () => {
  let component: QuanLyLenDiemComponent;
  let fixture: ComponentFixture<QuanLyLenDiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyLenDiemComponent]
    });
    fixture = TestBed.createComponent(QuanLyLenDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
