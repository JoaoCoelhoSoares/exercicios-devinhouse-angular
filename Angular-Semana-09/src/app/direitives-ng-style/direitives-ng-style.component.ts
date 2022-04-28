import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direitives-ng-style',
  templateUrl: './direitives-ng-style.component.html',
  styleUrls: ['./direitives-ng-style.component.scss']
})
export class DireitivesNgStyleComponent implements OnInit {

  public leia = { genero: 'Fem' }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public getColor(country: string): any {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

}
