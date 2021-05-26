import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbogadoCasoProcesoPage } from './abogado-caso-proceso.page';

const routes: Routes = [
  {
    path: '',
    component: AbogadoCasoProcesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbogadoCasoProcesoPageRoutingModule {}
