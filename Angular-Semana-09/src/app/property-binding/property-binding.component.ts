import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public animal = {
    name: 'Totoro',
    image: 'https://www.planocritico.com/wp-content/uploads/2021/01/meu_amigo_totoro_plano_critico.jpg'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
