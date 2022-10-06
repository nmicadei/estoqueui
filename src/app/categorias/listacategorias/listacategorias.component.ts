import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../../core/model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categorias: Observable<Categoria[]>;
  displayedColumns = ['id', 'nomecategorias'];


  constructor(private CategoriasService: CategoriasService) {
    this.categorias = this.CategoriasService.list();
  }

  ngOnInit(): void {
  }

}
