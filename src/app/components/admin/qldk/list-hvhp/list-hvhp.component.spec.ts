import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHVHPComponent } from './list-hvhp.component';

describe('ListHVHPComponent', () => {
  let component: ListHVHPComponent;
  let fixture: ComponentFixture<ListHVHPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHVHPComponent]
    });
    fixture = TestBed.createComponent(ListHVHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
