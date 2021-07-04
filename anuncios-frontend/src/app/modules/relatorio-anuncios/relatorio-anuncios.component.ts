import { Component, OnInit } from '@angular/core';
import { AnuncioRelatorio, RelatorioAnunciosService } from './services/relatorio-anuncios.service';

@Component({
  selector: 'app-relatorio-anuncios',
  templateUrl: './relatorio-anuncios.component.html',
  styleUrls: ['./relatorio-anuncios.component.css']
})
export class RelatorioAnunciosComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'valorTotalInvestido', 'qtdMaximaVisualizacoes', 'qtdMaximaCliques', 'qtdMaximaCompartilhamentos'];
  public dataSource: AnuncioRelatorio[] = [];
  public camposBusca: {cliente: string, dataInicioVigencia: Date, dataFimVigencia: Date} = {
    cliente: '',
    dataInicioVigencia: new Date(`${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`),
    dataFimVigencia: new Date(`${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear() + 1}`)
  };

  constructor(private readonly service: RelatorioAnunciosService) { }

  public filtrar(): void {
    this.ngOnInit();
  }

  public ngOnInit(): void {
    this.service.getRelatorio(this.camposBusca.cliente, this.camposBusca.dataInicioVigencia, this.camposBusca.dataFimVigencia)
      .subscribe(relatorio => this.dataSource = relatorio);
  }

}
