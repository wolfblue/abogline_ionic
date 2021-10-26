import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAgendasPage } from './admin-agendas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAgendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAgendasPageRoutingModule {}
