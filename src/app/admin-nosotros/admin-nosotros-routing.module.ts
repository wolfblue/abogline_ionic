import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNosotrosPage } from './admin-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNosotrosPageRoutingModule {}
