import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.guard';

describe('AuthGuard.Service', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
