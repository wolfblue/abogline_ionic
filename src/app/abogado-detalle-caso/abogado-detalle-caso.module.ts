import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadoDetalleCasoPageRoutingModule } from './abogado-detalle-caso-routing.module';

import { AbogadoDetalleCasoPage } from './abogado-detalle-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadoDetalleCasoPageRoutingModule
  ],
  declarations: [AbogadoDetalleCasoPage]
})
export class AbogadoDetalleCasoPageModule {}
