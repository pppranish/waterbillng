import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillComponent } from './water-bill.component';

describe('WaterBillComponent', () => {
  let component: WaterBillComponent;
  let fixture: ComponentFixture<WaterBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterBillComponent]
    });
    fixture = TestBed.createComponent(WaterBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
