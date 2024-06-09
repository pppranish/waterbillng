import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewageBillComponent } from './sewage-bill.component';

describe('SewageBillComponent', () => {
  let component: SewageBillComponent;
  let fixture: ComponentFixture<SewageBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SewageBillComponent]
    });
    fixture = TestBed.createComponent(SewageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
