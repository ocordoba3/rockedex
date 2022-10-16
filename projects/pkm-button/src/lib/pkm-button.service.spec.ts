import { TestBed } from '@angular/core/testing';

import { PkmButtonService } from './pkm-button.service';

describe('PkmButtonService', () => {
  let service: PkmButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
