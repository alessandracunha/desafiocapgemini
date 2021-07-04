import { Component, OnInit } from '@angular/core';
import { AnuncioCadastro, CadastroAnuncioService } from './services/cadastro-anuncio.service';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css']
})
export class CadastroAnuncioComponent implements OnInit {
  public anuncio: AnuncioCadastro = new AnuncioCadastro('', '', 0, new Date(), new Date());
  public visualizoesAproximadas: number = 0;

  constructor(private readonly service: CadastroAnuncioService) { }

  ngOnInit(): void {
  }

  public salvar(): void {
    this.service.cadastrar(this.anuncio).subscribe();
  }

  public calcularVisualizacoes() {
    this.service.calcularVisualizacoes(this.anuncio.investimentoDia)
      .subscribe(investimento => this.visualizoesAproximadas = investimento.qtdPessoas);
  }
}
