import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarCasosPage } from './buscar-casos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarCasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarCasosPageRoutingModule {}
