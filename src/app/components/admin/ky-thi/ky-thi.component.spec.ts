import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyThiComponent } from './ky-thi.component';

describe('KyThiComponent', () => {
  let component: KyThiComponent;
  let fixture: ComponentFixture<KyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KyThiComponent]
    });
    fixture = TestBed.createComponent(KyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
