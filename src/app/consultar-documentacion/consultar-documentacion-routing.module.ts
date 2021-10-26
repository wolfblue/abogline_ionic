import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarDocumentacionPage } from './consultar-documentacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarDocumentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarDocumentacionPageRoutingModule {}
