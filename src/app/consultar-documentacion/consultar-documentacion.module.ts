import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarDocumentacionPageRoutingModule } from './consultar-documentacion-routing.module';

import { ConsultarDocumentacionPage } from './consultar-documentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarDocumentacionPageRoutingModule
  ],
  declarations: [ConsultarDocumentacionPage]
})
export class ConsultarDocumentacionPageModule {}
