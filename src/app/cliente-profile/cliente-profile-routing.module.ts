import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteProfilePage } from './cliente-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteProfilePageRoutingModule {}
