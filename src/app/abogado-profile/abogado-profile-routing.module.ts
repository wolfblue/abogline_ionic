import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbogadoProfilePage } from './abogado-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AbogadoProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbogadoProfilePageRoutingModule {}
