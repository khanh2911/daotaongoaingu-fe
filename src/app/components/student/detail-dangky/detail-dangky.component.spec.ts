import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDangkyComponent } from './detail-dangky.component';

describe('DetailDangkyComponent', () => {
  let component: DetailDangkyComponent;
  let fixture: ComponentFixture<DetailDangkyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDangkyComponent]
    });
    fixture = TestBed.createComponent(DetailDangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
