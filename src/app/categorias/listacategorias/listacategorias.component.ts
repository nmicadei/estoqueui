import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  //LISTA-TABELA DE CATEGORIAS
  categorias: Categoria[] = [
    {id: 1, nomecategorias: 'Antibióticos'},
    {id: 2, nomecategorias: 'Analgesicos'},
    {id: 3, nomecategorias: 'Perfumaria'},
    {id: 4, nomecategorias: 'Pomadas'},
    {id: 5, nomecategorias: 'Produtos de Higiene'},
    {id: 6, nomecategorias: 'Injeções e aplicações'},
    {id: 7, nomecategorias: 'Berçário'},
    ];

  displayedColumns = ['id', 'nomecategorias'];


  constructor() { }

  ngOnInit(): void {
  }

}
