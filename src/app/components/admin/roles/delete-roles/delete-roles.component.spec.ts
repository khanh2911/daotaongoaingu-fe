import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRolesComponent } from './delete-roles.component';

describe('DeleteRolesComponent', () => {
  let component: DeleteRolesComponent;
  let fixture: ComponentFixture<DeleteRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRolesComponent]
    });
    fixture = TestBed.createComponent(DeleteRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
