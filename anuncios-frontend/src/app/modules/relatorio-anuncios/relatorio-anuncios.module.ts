import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioAnunciosComponent } from './relatorio-anuncios.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    RelatorioAnunciosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: RelatorioAnunciosComponent
      }
    ])
  ]
})
export class RelatorioAnunciosModule { }
