import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AdminGuard } from './admin.guard'; // Ensure the correct import path

describe('AdminGuard', () => {
  let guard: AdminGuard;

  // Define a function to execute the guard
  const executeGuard: CanActivateFn = (...guardParameters) => {
    guard = TestBed.inject(AdminGuard); // Instantiate the AdminGuard
    return guard.canActivate(...guardParameters); // Execute the canActivate method of AdminGuard
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard] // Include AdminGuard in the providers of testing module
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
