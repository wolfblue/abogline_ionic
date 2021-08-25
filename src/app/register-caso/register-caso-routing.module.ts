import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCasoPage } from './register-caso.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCasoPageRoutingModule {}
