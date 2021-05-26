import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadoCasoProcesoPageRoutingModule } from './abogado-caso-proceso-routing.module';

import { AbogadoCasoProcesoPage } from './abogado-caso-proceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadoCasoProcesoPageRoutingModule
  ],
  declarations: [AbogadoCasoProcesoPage]
})
export class AbogadoCasoProcesoPageModule {}
