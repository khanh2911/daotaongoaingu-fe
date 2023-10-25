import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiaoVienRaDeComponent } from './list-giao-vien-ra-de.component';

describe('ListGiaoVienRaDeComponent', () => {
  let component: ListGiaoVienRaDeComponent;
  let fixture: ComponentFixture<ListGiaoVienRaDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGiaoVienRaDeComponent]
    });
    fixture = TestBed.createComponent(ListGiaoVienRaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
