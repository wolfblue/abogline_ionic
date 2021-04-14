import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteBuscarCasoPage } from './cliente-buscar-caso.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteBuscarCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteBuscarCasoPageRoutingModule {}
