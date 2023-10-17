import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKyThiComponent } from './detail-ky-thi.component';

describe('DetailKyThiComponent', () => {
  let component: DetailKyThiComponent;
  let fixture: ComponentFixture<DetailKyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailKyThiComponent]
    });
    fixture = TestBed.createComponent(DetailKyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
