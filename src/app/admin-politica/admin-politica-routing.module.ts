import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPoliticaPage } from './admin-politica.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPoliticaPageRoutingModule {}
