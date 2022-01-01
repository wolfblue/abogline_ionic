import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminQuienesSomosPageRoutingModule } from './admin-quienes-somos-routing.module';

import { AdminQuienesSomosPage } from './admin-quienes-somos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminQuienesSomosPageRoutingModule
  ],
  declarations: [AdminQuienesSomosPage]
})
export class AdminQuienesSomosPageModule {}
