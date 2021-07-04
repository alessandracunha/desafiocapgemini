import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AnuncioCadastro {
  public constructor(
    public nome: string,
    public cliente: string,
    public investimentoDia: number,
    public dataInicioVigencia: Date,
    public dataFimVigencia: Date
  ) { }
}

export class Investimento {
  public constructor(
    public valorTotalInvestido: number,
    public qtdMaximaVisualizacoes: number,
    public qtdMaximaCliques: number,
    public qtdMaximaCompartilhamentos: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class CadastroAnuncioService {
  constructor(private readonly httpClient: HttpClient) { }

  public cadastrar(anuncio: AnuncioCadastro): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/anuncio`, anuncio);
  }

  public calcularVisualizacoes(investimentoDia: number, dataInicioVigencia: Date, dataFimVigencia: Date): Observable<Investimento> {
    return this.httpClient.get<Investimento>(`${environment.apiUrl}/calcularValorInvestido` +
      `?investimentoPorDia=${investimentoDia}` + 
      `&dataInicioVigencia=${dataInicioVigencia.getMonth() + 1}-${dataInicioVigencia.getDate()}-${dataInicioVigencia.getFullYear()}` + 
      `&dataFimVigencia=${dataFimVigencia.getMonth() + 1}-${dataFimVigencia.getDate()}-${dataFimVigencia.getFullYear()}`)
  }
}
