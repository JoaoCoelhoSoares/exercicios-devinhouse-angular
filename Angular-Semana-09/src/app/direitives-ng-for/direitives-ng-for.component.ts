import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direitives-ng-for',
  templateUrl: './direitives-ng-for.component.html',
  styleUrls: ['./direitives-ng-for.component.scss']
})
export class DireitivesNgForComponent implements OnInit {

  public users = [
    {id: 1, name: 'Gabriel', idade: 22},
    {id: 2, name: 'Pedro', idade: 42},
    {id: 3, name: 'Julia',  idade: 82}
  ];

  public alunos = ['pamy', 'carla', 'joana'];

  constructor() { }

  ngOnInit(): void {
  }

}
