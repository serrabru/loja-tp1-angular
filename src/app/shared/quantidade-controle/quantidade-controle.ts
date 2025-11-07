import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantidade-controle',
  imports: [],
  standalone: true,
  templateUrl: './quantidade-controle.html',
  styleUrl: './quantidade-controle.css'
})
export class QuantidadeControle {
  contador = model<number>(0);

  decrementar(){
    this.contador.set(Math.max(0, this.contador() - 1));
    //this.contador.update(n => Math.max(1, n - 1));
  }

  incrementar(){
    this.contador.update(valor => valor + 1);
  }
}
