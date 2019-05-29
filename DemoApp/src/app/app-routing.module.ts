import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: '', component: PessoasComponent },
  { path: 'pessoas', component: PessoasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
