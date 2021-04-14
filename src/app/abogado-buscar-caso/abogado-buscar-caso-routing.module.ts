import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbogadoBuscarCasoPage } from './abogado-buscar-caso.page';

const routes: Routes = [
  {
    path: '',
    component: AbogadoBuscarCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbogadoBuscarCasoPageRoutingModule {}
