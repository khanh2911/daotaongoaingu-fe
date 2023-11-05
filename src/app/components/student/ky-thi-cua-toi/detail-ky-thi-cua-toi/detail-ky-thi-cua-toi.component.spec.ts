import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKyThiCuaToiComponent } from './detail-ky-thi-cua-toi.component';

describe('DetailKyThiCuaToiComponent', () => {
  let component: DetailKyThiCuaToiComponent;
  let fixture: ComponentFixture<DetailKyThiCuaToiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailKyThiCuaToiComponent]
    });
    fixture = TestBed.createComponent(DetailKyThiCuaToiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
