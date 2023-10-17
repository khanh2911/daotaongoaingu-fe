import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanCongPhongThiComponent } from './phan-cong-phong-thi.component';

describe('PhanCongPhongThiComponent', () => {
  let component: PhanCongPhongThiComponent;
  let fixture: ComponentFixture<PhanCongPhongThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanCongPhongThiComponent]
    });
    fixture = TestBed.createComponent(PhanCongPhongThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
