import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ListacategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule

  ]
})
export class CategoriasModule { }
