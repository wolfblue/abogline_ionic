import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCasoPage } from './registrar-caso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCasoPageRoutingModule {}
