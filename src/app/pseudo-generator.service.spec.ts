import { TestBed } from '@angular/core/testing';

import { PseudoGeneratorService } from './pseudo-generator.service';

describe('PseudoGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PseudoGeneratorService = TestBed.get(PseudoGeneratorService);
    expect(service).toBeTruthy();
  });
});
