import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarCasoPageRoutingModule } from './consultar-caso-routing.module';

import { ConsultarCasoPage } from './consultar-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarCasoPageRoutingModule
  ],
  declarations: [ConsultarCasoPage]
})
export class ConsultarCasoPageModule {}
