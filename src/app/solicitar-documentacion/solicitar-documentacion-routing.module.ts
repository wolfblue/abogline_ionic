import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarDocumentacionPage } from './solicitar-documentacion.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarDocumentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarDocumentacionPageRoutingModule {}
