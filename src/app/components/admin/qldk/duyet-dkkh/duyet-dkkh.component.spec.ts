import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetDkkhComponent } from './duyet-dkkh.component';

describe('DuyetDkkhComponent', () => {
  let component: DuyetDkkhComponent;
  let fixture: ComponentFixture<DuyetDkkhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuyetDkkhComponent]
    });
    fixture = TestBed.createComponent(DuyetDkkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
