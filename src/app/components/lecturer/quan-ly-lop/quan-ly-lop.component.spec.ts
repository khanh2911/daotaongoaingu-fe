import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyLopComponent } from './quan-ly-lop.component';

describe('QuanLyLopComponent', () => {
  let component: QuanLyLopComponent;
  let fixture: ComponentFixture<QuanLyLopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyLopComponent]
    });
    fixture = TestBed.createComponent(QuanLyLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
