import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeclassComponent } from './delete-typeclass.component';

describe('DeleteTypeclassComponent', () => {
  let component: DeleteTypeclassComponent;
  let fixture: ComponentFixture<DeleteTypeclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTypeclassComponent]
    });
    fixture = TestBed.createComponent(DeleteTypeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
