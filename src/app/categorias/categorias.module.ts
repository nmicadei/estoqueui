import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListacategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MatTableModule,
    MatCardModule

  ]
})
export class CategoriasModule { }
