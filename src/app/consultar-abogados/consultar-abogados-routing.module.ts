import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarAbogadosPage } from './consultar-abogados.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarAbogadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarAbogadosPageRoutingModule {}
