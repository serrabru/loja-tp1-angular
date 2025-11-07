import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    sobre? : string;

//input = [nome]
//output = (nome)
//model = [(contador) = "signal"]
  qtd = signal(1);

  receberSobre(texto: string){
    this.sobre = texto;
  }
}
