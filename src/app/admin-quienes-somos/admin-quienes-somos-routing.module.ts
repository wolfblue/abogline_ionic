import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminQuienesSomosPage } from './admin-quienes-somos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminQuienesSomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminQuienesSomosPageRoutingModule {}
