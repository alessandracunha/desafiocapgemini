import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro-anuncio',
    loadChildren: () => import('./modules/cadastro-anuncio/cadastro-anuncio.module')
      .then(m => m.CadastroAnuncioModule)
  },
  {
    path: 'relatorio-anuncios',
    loadChildren: () => import('./modules/relatorio-anuncios/relatorio-anuncios.module')
      .then(m => m.RelatorioAnunciosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
