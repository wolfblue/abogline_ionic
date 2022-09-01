import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminContratosPage } from './admin-contratos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminContratosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminContratosPageRoutingModule {}
