import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service1: Service1Service,
  ) { }


  ngOnInit(): void {
    // this._service1.customVariable;
    //const variable = this._service1.get();
    //alert(variable)
  }

}
