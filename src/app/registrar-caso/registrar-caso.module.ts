import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCasoPageRoutingModule } from './registrar-caso-routing.module';

import { RegistrarCasoPage } from './registrar-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCasoPageRoutingModule
  ],
  declarations: [RegistrarCasoPage]
})
export class RegistrarCasoPageModule {}
