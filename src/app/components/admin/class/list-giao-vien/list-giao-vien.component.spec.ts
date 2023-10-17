import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiaoVienComponent } from './list-giao-vien.component';

describe('ListGiaoVienComponent', () => {
  let component: ListGiaoVienComponent;
  let fixture: ComponentFixture<ListGiaoVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGiaoVienComponent]
    });
    fixture = TestBed.createComponent(ListGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
