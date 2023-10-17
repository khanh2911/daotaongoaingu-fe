import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QldkComponent } from './qldk.component';

describe('QldkComponent', () => {
  let component: QldkComponent;
  let fixture: ComponentFixture<QldkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QldkComponent]
    });
    fixture = TestBed.createComponent(QldkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
