import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiaoVienGacThiComponent } from './list-giao-vien-gac-thi.component';

describe('ListGiaoVienGacThiComponent', () => {
  let component: ListGiaoVienGacThiComponent;
  let fixture: ComponentFixture<ListGiaoVienGacThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGiaoVienGacThiComponent]
    });
    fixture = TestBed.createComponent(ListGiaoVienGacThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
