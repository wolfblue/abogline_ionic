import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteAbogadoPage } from './cliente-abogado.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteAbogadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAbogadoPageRoutingModule {}
