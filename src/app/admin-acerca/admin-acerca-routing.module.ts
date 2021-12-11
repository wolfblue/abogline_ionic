import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAcercaPage } from './admin-acerca.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAcercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAcercaPageRoutingModule {}
