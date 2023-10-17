import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDiglogComponent } from './notification-diglog.component';

describe('NotificationDiglogComponent', () => {
  let component: NotificationDiglogComponent;
  let fixture: ComponentFixture<NotificationDiglogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationDiglogComponent]
    });
    fixture = TestBed.createComponent(NotificationDiglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
