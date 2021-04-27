import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteAbogadoPageRoutingModule } from './cliente-abogado-routing.module';

import { ClienteAbogadoPage } from './cliente-abogado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAbogadoPageRoutingModule
  ],
  declarations: [ClienteAbogadoPage]
})
export class ClienteAbogadoPageModule {}
