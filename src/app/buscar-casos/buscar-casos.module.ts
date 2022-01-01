import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCasosPageRoutingModule } from './buscar-casos-routing.module';

import { BuscarCasosPage } from './buscar-casos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarCasosPageRoutingModule
  ],
  declarations: [BuscarCasosPage]
})
export class BuscarCasosPageModule {}
