import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTextosPage } from './admin-textos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTextosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTextosPageRoutingModule {}
