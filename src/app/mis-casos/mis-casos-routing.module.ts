import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCasosPage } from './mis-casos.page';

const routes: Routes = [
  {
    path: '',
    component: MisCasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCasosPageRoutingModule {}
