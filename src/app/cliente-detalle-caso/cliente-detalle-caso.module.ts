import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDetalleCasoPageRoutingModule } from './cliente-detalle-caso-routing.module';

import { ClienteDetalleCasoPage } from './cliente-detalle-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDetalleCasoPageRoutingModule
  ],
  declarations: [ClienteDetalleCasoPage]
})
export class ClienteDetalleCasoPageModule {}
