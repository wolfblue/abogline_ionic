import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTipoDocumentoPage } from './admin-tipo-documento.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTipoDocumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTipoDocumentoPageRoutingModule {}
