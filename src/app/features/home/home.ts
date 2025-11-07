import { Component } from '@angular/core';
import { ListaProdutos } from '../produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListaProdutos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
