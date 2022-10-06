import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = ['id', 'nomeprodutos'];


  constructor(private ProdutosService: ProdutosService) {
    this.produtos = this.ProdutosService.list();
  }

  ngOnInit(): void {
  }

}
