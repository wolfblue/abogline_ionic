import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDetalleCasoPage } from './cliente-detalle-caso.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetalleCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteDetalleCasoPageRoutingModule {}
