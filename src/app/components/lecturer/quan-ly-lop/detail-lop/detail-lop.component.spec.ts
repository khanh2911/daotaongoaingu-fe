import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLopComponent } from './detail-lop.component';

describe('DetailLopComponent', () => {
  let component: DetailLopComponent;
  let fixture: ComponentFixture<DetailLopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLopComponent]
    });
    fixture = TestBed.createComponent(DetailLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
