import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaProdutosPage  {

  listaProdutos : Produto [] = []

  constructor( private produtosService : ProdutosService) {
    this.buscarProdutos()
   }

   buscarProdutos(){
    this.produtosService.getAll().subscribe(dados => {
      this.listaProdutos = dados as Produto[];
    });
  }
}
