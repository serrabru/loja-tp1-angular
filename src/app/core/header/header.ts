import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); // <app-header [tituloLoja] = "titulo"></app-header>

  textoSobre = output<string>();

  enviarSobre(){
    this.textoSobre.emit('Técnicas de Programação 1 - Desenvolvido por Bruna Serra');
  }

}
