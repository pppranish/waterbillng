import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDetailsComponent } from './consumer-details.component';

describe('ConsumerDetailsComponent', () => {
  let component: ConsumerDetailsComponent;
  let fixture: ComponentFixture<ConsumerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerDetailsComponent]
    });
    fixture = TestBed.createComponent(ConsumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
