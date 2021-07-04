import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioCadastro, CadastroAnuncioService } from './services/cadastro-anuncio.service';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css']
})
export class CadastroAnuncioComponent implements OnInit {
  public anuncio: AnuncioCadastro = new AnuncioCadastro('', '', 0, new Date(), new Date());
  public visualizoesAproximadas: number = 0;
  public valorTotalInvestido: number = 0;

  constructor(
    private readonly service: CadastroAnuncioService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  public async salvar(): Promise<void> {
    try {
      await this.service.cadastrar(this.anuncio).toPromise();
      this.router.navigate(['relatorio-anuncios']);
    } catch (err) {
      throw err;
    }
  }

  public calcularVisualizacoes() {
    this.service.calcularVisualizacoes(this.anuncio.investimentoDia, this.anuncio.dataInicioVigencia, this.anuncio.dataFimVigencia)
      .subscribe(investimento => {
        this.visualizoesAproximadas = investimento.qtdMaximaVisualizacoes
        this.valorTotalInvestido = investimento.valorTotalInvestido
      });
  }

  public onChangeDataInicio(dataInicioVigencia: Date) {
    this.anuncio.dataInicioVigencia = dataInicioVigencia;
    this.calcularVisualizacoes();
  }

  public onChangeDataFim(dataFimVigencia: Date) {
    this.anuncio.dataFimVigencia = dataFimVigencia;
    this.calcularVisualizacoes();
  }
}
