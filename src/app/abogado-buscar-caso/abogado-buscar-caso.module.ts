import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadoBuscarCasoPageRoutingModule } from './abogado-buscar-caso-routing.module';

import { AbogadoBuscarCasoPage } from './abogado-buscar-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadoBuscarCasoPageRoutingModule
  ],
  declarations: [AbogadoBuscarCasoPage]
})
export class AbogadoBuscarCasoPageModule {}
