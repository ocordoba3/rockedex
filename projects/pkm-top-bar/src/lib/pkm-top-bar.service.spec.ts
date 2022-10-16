import { TestBed } from '@angular/core/testing';

import { PkmTopBarService } from './pkm-top-bar.service';

describe('PkmTopBarService', () => {
  let service: PkmTopBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmTopBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
