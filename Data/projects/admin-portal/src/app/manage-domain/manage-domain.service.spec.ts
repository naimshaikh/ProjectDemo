import { TestBed } from '@angular/core/testing';

import { ManageDomainService } from './manage-domain.service';

describe('ManageDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageDomainService = TestBed.get(ManageDomainService);
    expect(service).toBeTruthy();
  });
});
