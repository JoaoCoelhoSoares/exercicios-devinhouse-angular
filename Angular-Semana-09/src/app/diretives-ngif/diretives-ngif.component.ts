import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretives-ngif',
  templateUrl: './diretives-ngif.component.html',
  styleUrls: ['./diretives-ngif.component.scss']
})
export class DiretivesNgifComponent implements OnInit {

  public userLoggedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
