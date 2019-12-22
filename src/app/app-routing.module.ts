import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinhaCooperativaComponent } from './components/minha-cooperativa/minha-cooperativa.component';
import { MeusResultadosComponent } from './components/meus-resultados/meus-resultados.component';
import { RemuneracaoComponent } from './components/remuneracao/remuneracao.component';


const routes: Routes = [
  {path: '', component: MinhaCooperativaComponent},
  {path: 'resultados', component: MeusResultadosComponent},
  {path: 'remuneracao', component: RemuneracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
