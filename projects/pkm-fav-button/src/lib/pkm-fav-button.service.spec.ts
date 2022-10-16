import { TestBed } from '@angular/core/testing';

import { PkmFavButtonService } from './pkm-fav-button.service';

describe('PkmFavButtonService', () => {
  let service: PkmFavButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmFavButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
