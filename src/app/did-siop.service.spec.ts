import { TestBed } from '@angular/core/testing';

import { DidSiopService } from './did-siop.service';

describe('DidSiopService', () => {
  let service: DidSiopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DidSiopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
