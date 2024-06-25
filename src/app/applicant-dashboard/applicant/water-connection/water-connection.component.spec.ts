import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConnectionComponent } from './water-connection.component';

describe('WaterConnectionComponent', () => {
  let component: WaterConnectionComponent;
  let fixture: ComponentFixture<WaterConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterConnectionComponent]
    });
    fixture = TestBed.createComponent(WaterConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
