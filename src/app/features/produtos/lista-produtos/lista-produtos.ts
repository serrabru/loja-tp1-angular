import { Component, computed, signal } from '@angular/core';
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
      nome: 'A Vida Invisível de Addie Larue',
      descricao: 'V.E Schwab - Fantasia',
      preco: 30.00,
      imageURL: 'images/a_vida_invisivel_de_addie_larue.jpg',
      promo: true,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Misery',
      descricao: 'Stephen King - Suspense',
      preco: 79.90,
      imageURL: 'https://i.pinimg.com/1200x/75/73/b8/7573b8d08e7c479e40ef0504ad8fc3b9.jpg',
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'O Vilarejo',
      descricao: 'Raphael Montes - Thriller',
      preco: 50.90,
      imageURL: 'images/o_vilarejo.jpg',
      estado: 'esgotado'
    }
  ]

  apenaspromo = signal(false);

  prodExibidos = computed(() => this.apenaspromo() ? this.produtos.filter(p => p.promo) : this.produtos);

  alternarPromo(){
    this.apenaspromo.update(p => !p);
  }

  onAddProduto(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}
