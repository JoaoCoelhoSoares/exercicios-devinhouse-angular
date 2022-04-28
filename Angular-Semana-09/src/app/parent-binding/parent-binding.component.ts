import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-binding',
  templateUrl: './parent-binding.component.html',
  styleUrls: ['./parent-binding.component.scss']
})
export class ParentBindingComponent implements OnInit {

  @Input() frase: string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
