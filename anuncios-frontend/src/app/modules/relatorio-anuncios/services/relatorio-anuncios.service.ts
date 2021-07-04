import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AnuncioRelatorio {
  constructor(
    public nome: string,
    public valorTotalInvestido: string,
    public qtdMaximaVisualizacoes: number,
    public qtdMaximaCliques: number,
    public qtdMaximaCompartilhamentos: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class RelatorioAnunciosService {
  constructor(private readonly httpClient: HttpClient) { }
  
  public getRelatorio(cliente: string, dataInicioVigencia: Date, dataFimVigencia: Date): Observable<AnuncioRelatorio[]> {
    return this.httpClient.get<AnuncioRelatorio[]>(`${environment.apiUrl}/relatorio` +
    `?cliente=${cliente}` + 
    `&dataInicioVigencia=${dataInicioVigencia.getMonth() + 1}-${dataInicioVigencia.getDate()}-${dataInicioVigencia.getFullYear()}` + 
    `&dataFimVigencia=${dataFimVigencia.getMonth() + 1}-${dataFimVigencia.getDate()}-${dataFimVigencia.getFullYear()}`);
  }
}
