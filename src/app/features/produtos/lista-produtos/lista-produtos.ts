import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Produto 1',
      preco: 178.90,
      imageURL: 'images/logoifsp.png',
      promo: true
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Produto 2',
      preco: 100
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Produto 3',
      preco: 78.90
    }
  ]
add: any;

  onAddProduto(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }
}
