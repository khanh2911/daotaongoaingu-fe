import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiaoVienLenDiemComponent } from './list-giao-vien-len-diem.component';

describe('ListGiaoVienLenDiemComponent', () => {
  let component: ListGiaoVienLenDiemComponent;
  let fixture: ComponentFixture<ListGiaoVienLenDiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGiaoVienLenDiemComponent]
    });
    fixture = TestBed.createComponent(ListGiaoVienLenDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
