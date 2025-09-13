import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar(), {initialValue: []});
  apenaspromo = signal(false);

  prodExibidos = computed(() => this.apenaspromo() ? this.produtos().filter(p => p.promo) : this.produtos);

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
