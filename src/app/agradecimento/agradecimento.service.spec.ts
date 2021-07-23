import { TestBed } from '@angular/core/testing';

import { AgradecimentoService } from './agradecimento.service';

describe('AgradecimentoService', () => {
  let service: AgradecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgradecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
