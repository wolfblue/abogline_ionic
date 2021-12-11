import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTitulosHvPage } from './admin-titulos-hv.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTitulosHvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTitulosHvPageRoutingModule {}
