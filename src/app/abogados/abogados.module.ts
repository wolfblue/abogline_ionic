import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadosPageRoutingModule } from './abogados-routing.module';

import { AbogadosPage } from './abogados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadosPageRoutingModule
  ],
  declarations: [AbogadosPage]
})
export class AbogadosPageModule {}
