import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  public valor: number = 0;
  
  public incrementar(): void {
    this.valor++;
  }

  public diminuir() {
    this.valor--;
  }

}
