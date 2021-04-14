import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbogadoDetalleCasoPage } from './abogado-detalle-caso.page';

const routes: Routes = [
  {
    path: '',
    component: AbogadoDetalleCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbogadoDetalleCasoPageRoutingModule {}
