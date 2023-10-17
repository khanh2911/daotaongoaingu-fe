import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHocVienComponent } from './list-hoc-vien.component';

describe('ListHocVienComponent', () => {
  let component: ListHocVienComponent;
  let fixture: ComponentFixture<ListHocVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHocVienComponent]
    });
    fixture = TestBed.createComponent(ListHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
