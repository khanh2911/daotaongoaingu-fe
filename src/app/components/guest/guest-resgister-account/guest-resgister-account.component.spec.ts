import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestResgisterAccountComponent } from './guest-resgister-account.component';

describe('GuestResgisterAccountComponent', () => {
  let component: GuestResgisterAccountComponent;
  let fixture: ComponentFixture<GuestResgisterAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestResgisterAccountComponent]
    });
    fixture = TestBed.createComponent(GuestResgisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
