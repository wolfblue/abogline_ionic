import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarAbogadosPageRoutingModule } from './consultar-abogados-routing.module';

import { ConsultarAbogadosPage } from './consultar-abogados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarAbogadosPageRoutingModule
  ],
  declarations: [ConsultarAbogadosPage]
})
export class ConsultarAbogadosPageModule {}
