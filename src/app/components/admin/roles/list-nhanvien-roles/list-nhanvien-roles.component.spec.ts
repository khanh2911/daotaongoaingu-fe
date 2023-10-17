import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNhanvienRolesComponent } from './list-nhanvien-roles.component';

describe('ListNhanvienRolesComponent', () => {
  let component: ListNhanvienRolesComponent;
  let fixture: ComponentFixture<ListNhanvienRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNhanvienRolesComponent]
    });
    fixture = TestBed.createComponent(ListNhanvienRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
