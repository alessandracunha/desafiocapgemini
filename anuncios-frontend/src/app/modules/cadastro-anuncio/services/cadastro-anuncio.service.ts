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
    public investimento: number,
    public qtdPessoas: number,
    public qtdCliques: number,
    public qtdCompartilhamentos: number
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

  public calcularVisualizacoes(investimentoDia: number): Observable<Investimento> {
    return this.httpClient.get<Investimento>(`${environment.apiUrl}/calcularValorInvestido?investimento=${investimentoDia}`)
  }
}
