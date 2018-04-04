import { TestBed, inject } from '@angular/core/testing';

import { SnehaService } from './sneha.service';

describe('SnehaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnehaService]
    });
  });

  it('should be created', inject([SnehaService], (service: SnehaService) => {
    expect(service).toBeTruthy();
  }));
});
