import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarCasoPage } from './consultar-caso.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarCasoPageRoutingModule {}
