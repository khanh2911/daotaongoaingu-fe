import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiRaDeComponent } from './quan-li-ra-de.component';

describe('QuanLiRaDeComponent', () => {
  let component: QuanLiRaDeComponent;
  let fixture: ComponentFixture<QuanLiRaDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLiRaDeComponent]
    });
    fixture = TestBed.createComponent(QuanLiRaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
