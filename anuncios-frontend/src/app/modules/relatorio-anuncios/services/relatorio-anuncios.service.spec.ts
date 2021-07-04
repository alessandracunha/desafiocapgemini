import { TestBed } from '@angular/core/testing';

import { RelatorioAnunciosService } from './relatorio-anuncios.service';

describe('RelatorioAnunciosService', () => {
  let service: RelatorioAnunciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioAnunciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
