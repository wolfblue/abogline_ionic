import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaPagosPage } from './respuesta-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaPagosPageRoutingModule {}
