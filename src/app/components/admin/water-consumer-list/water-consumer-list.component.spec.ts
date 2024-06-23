import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConsumerListComponent } from './water-consumer-list.component';

describe('WaterConsumerListComponent', () => {
  let component: WaterConsumerListComponent;
  let fixture: ComponentFixture<WaterConsumerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterConsumerListComponent]
    });
    fixture = TestBed.createComponent(WaterConsumerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
