import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDetalleAbogadoPage } from './cliente-detalle-abogado.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetalleAbogadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteDetalleAbogadoPageRoutingModule {}
