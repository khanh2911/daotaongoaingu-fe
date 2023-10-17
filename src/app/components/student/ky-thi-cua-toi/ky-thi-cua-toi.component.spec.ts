import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyThiCuaToiComponent } from './ky-thi-cua-toi.component';

describe('KyThiCuaToiComponent', () => {
  let component: KyThiCuaToiComponent;
  let fixture: ComponentFixture<KyThiCuaToiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KyThiCuaToiComponent]
    });
    fixture = TestBed.createComponent(KyThiCuaToiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
