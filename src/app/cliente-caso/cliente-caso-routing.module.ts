import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCasoPage } from './cliente-caso.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCasoPageRoutingModule {}
