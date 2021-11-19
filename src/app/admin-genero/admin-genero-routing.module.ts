import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGeneroPage } from './admin-genero.page';

const routes: Routes = [
  {
    path: '',
    component: AdminGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminGeneroPageRoutingModule {}
