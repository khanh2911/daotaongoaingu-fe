import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhongThiComponent } from './detail-phong-thi.component';

describe('DetailPhongThiComponent', () => {
  let component: DetailPhongThiComponent;
  let fixture: ComponentFixture<DetailPhongThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPhongThiComponent]
    });
    fixture = TestBed.createComponent(DetailPhongThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
