import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './view/calculadora/calculadora.component';
import { FilmesComponent } from './view/filmes/filmes.component';
import { LoginComponent } from './view/login/login.component';
import { PesquisaComponent } from './view/pesquisa/pesquisa.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'exercicio1',
    component: LoginComponent
  },
  {
    path: 'exercicio2',
    component: PesquisaComponent
  },
  {
    path: 'exercicio3',
    component: CalculadoraComponent
  },
  {
    path: 'filmes',
    component: FilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }