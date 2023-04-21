import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPersonalizarPageRoutingModule } from './admin-personalizar-routing.module';

import { AdminPersonalizarPage } from './admin-personalizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPersonalizarPageRoutingModule
  ],
  declarations: [AdminPersonalizarPage]
})
export class AdminPersonalizarPageModule {}
