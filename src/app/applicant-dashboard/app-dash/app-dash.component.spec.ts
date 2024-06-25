import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashComponent } from './app-dash.component';

describe('AppDashComponent', () => {
  let component: AppDashComponent;
  let fixture: ComponentFixture<AppDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDashComponent]
    });
    fixture = TestBed.createComponent(AppDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
