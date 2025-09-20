import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lista-produtos',
  imports: [CommonModule, CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private router = inject(Router);

  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar(), {initialValue: []});
  apenaspromo = signal(false);

  prodExibidos = computed(() => {
    return this.apenaspromo() ? this.produtos().filter(p => p.promo) : this.produtos;
  });

  alternarPromo(){
    this.apenaspromo.update(p => !p);
  }

  onAddProduto(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    this.router.navigate(['/produtos', id]);
  }
  
}
