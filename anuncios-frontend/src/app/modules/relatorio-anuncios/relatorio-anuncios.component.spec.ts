import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAnunciosComponent } from './relatorio-anuncios.component';

describe('RelatorioAnunciosComponent', () => {
  let component: RelatorioAnunciosComponent;
  let fixture: ComponentFixture<RelatorioAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
