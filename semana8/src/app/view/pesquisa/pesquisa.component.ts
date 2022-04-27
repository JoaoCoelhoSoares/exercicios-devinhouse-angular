import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {
  textoDigitado: any = '';

  constructor() { }

  ngOnInit(): void {

  }

  capturaTexto(event: any) {
    if (event.key === "Backspace") {
      this.textoDigitado = this.textoDigitado.slice(0, -1);
    } else {
      this.textoDigitado += event.key;
    }
  }
}
