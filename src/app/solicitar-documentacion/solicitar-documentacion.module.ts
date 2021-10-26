import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarDocumentacionPageRoutingModule } from './solicitar-documentacion-routing.module';

import { SolicitarDocumentacionPage } from './solicitar-documentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarDocumentacionPageRoutingModule
  ],
  declarations: [SolicitarDocumentacionPage]
})
export class SolicitarDocumentacionPageModule {}
