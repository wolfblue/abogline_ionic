import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCasoPageRoutingModule } from './cliente-caso-routing.module';

import { ClienteCasoPage } from './cliente-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCasoPageRoutingModule
  ],
  declarations: [ClienteCasoPage]
})
export class ClienteCasoPageModule {}
