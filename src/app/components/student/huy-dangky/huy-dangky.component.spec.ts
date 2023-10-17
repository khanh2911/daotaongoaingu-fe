import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuyDangkyComponent } from './huy-dangky.component';

describe('HuyDangkyComponent', () => {
  let component: HuyDangkyComponent;
  let fixture: ComponentFixture<HuyDangkyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuyDangkyComponent]
    });
    fixture = TestBed.createComponent(HuyDangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
