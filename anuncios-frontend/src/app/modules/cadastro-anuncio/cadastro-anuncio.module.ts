import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAnuncioComponent } from './cadastro-anuncio.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CadastroAnuncioComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CadastroAnuncioComponent
      }
    ])
  ]
})
export class CadastroAnuncioModule { }
