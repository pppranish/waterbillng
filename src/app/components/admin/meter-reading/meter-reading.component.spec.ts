import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReadingComponent } from './meter-reading.component';

describe('MeterReadingComponent', () => {
  let component: MeterReadingComponent;
  let fixture: ComponentFixture<MeterReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeterReadingComponent]
    });
    fixture = TestBed.createComponent(MeterReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
