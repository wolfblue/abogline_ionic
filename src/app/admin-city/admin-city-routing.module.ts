import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCityPage } from './admin-city.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCityPageRoutingModule {}
