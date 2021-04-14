import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDetalleAbogadoPageRoutingModule } from './cliente-detalle-abogado-routing.module';

import { ClienteDetalleAbogadoPage } from './cliente-detalle-abogado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDetalleAbogadoPageRoutingModule
  ],
  declarations: [ClienteDetalleAbogadoPage]
})
export class ClienteDetalleAbogadoPageModule {}
