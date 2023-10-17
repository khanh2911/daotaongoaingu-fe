import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQldkComponent } from './delete-qldk.component';

describe('DeleteQldkComponent', () => {
  let component: DeleteQldkComponent;
  let fixture: ComponentFixture<DeleteQldkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteQldkComponent]
    });
    fixture = TestBed.createComponent(DeleteQldkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
