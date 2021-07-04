import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioAnunciosComponent } from './relatorio-anuncios.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RelatorioAnunciosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RelatorioAnunciosComponent
      }
    ])
  ]
})
export class RelatorioAnunciosModule { }
