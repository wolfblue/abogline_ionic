import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaPagosPageRoutingModule } from './respuesta-pagos-routing.module';

import { RespuestaPagosPage } from './respuesta-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaPagosPageRoutingModule
  ],
  declarations: [RespuestaPagosPage]
})
export class RespuestaPagosPageModule {}
