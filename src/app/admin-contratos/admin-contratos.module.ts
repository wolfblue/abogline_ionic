import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminContratosPageRoutingModule } from './admin-contratos-routing.module';

import { AdminContratosPage } from './admin-contratos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminContratosPageRoutingModule
  ],
  declarations: [AdminContratosPage]
})
export class AdminContratosPageModule {}
