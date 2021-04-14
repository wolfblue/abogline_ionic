import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteBuscarCasoPageRoutingModule } from './cliente-buscar-caso-routing.module';

import { ClienteBuscarCasoPage } from './cliente-buscar-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteBuscarCasoPageRoutingModule
  ],
  declarations: [ClienteBuscarCasoPage]
})
export class ClienteBuscarCasoPageModule {}
