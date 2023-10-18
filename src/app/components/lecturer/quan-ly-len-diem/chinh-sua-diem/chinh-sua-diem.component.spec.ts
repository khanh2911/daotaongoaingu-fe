import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaDiemComponent } from './chinh-sua-diem.component';

describe('ChinhSuaDiemComponent', () => {
  let component: ChinhSuaDiemComponent;
  let fixture: ComponentFixture<ChinhSuaDiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChinhSuaDiemComponent]
    });
    fixture = TestBed.createComponent(ChinhSuaDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
