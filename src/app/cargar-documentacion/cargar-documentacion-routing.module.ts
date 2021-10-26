import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarDocumentacionPage } from './cargar-documentacion.page';

const routes: Routes = [
  {
    path: '',
    component: CargarDocumentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarDocumentacionPageRoutingModule {}
