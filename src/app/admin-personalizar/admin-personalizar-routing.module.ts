import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPersonalizarPage } from './admin-personalizar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPersonalizarPageRoutingModule {}
