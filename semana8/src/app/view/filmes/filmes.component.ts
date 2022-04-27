import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Service1Service } from 'src/app/services/service1.service';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  nomeFilme: any;

  _form: FormGroup = this.formBuilder.group({
    nome: [''],
    email: [''],
    nomeFilme: [''],
    avaliacao: [''],
  });

  /*
  _form: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required], [Validators.email]],
    nomeFilme: ['', [Validators.required], [Validators.minLength(3)]],
    avaliacao: ['', [Validators.min(1)], [Validators.max(10)], [Validators.required]],
  });

  */

  constructor(private formBuilder: FormBuilder, public _service: Service1Service) { }



  ngOnInit(): void {

  }

  submit() {
    alert(`Você avaliou o filme ${this.nomeFilme}`);
    console.log(this._form.value);
  }

}










