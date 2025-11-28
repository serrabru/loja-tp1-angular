import { inject, Inject, Injectable } from '@angular/core';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../../core/services/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  http = inject(HttpClient);
  apiURL = 'https://fakestoreapi.com/products';


  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] - listar() - consumindo API Externa');
    return this.http.get<any[]>(this.apiURL).pipe(
      map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
      catchError(err => of([]))
    );
  }

  getById(id: number): Observable<Produto | undefined> {
    return of();//exercicio
  }

  criar(produto: Produto) : Observable<any>{
    let body = {
      title: produto.nome,
      price: produto.preco,
      dscription: produto.descricao,
      image: produto.imageURL,
      category: produto.categoria
    };
    return this.http.post(this.apiURL, body);
  }
}