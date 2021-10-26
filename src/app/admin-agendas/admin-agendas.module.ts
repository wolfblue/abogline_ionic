import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAgendasPageRoutingModule } from './admin-agendas-routing.module';

import { AdminAgendasPage } from './admin-agendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAgendasPageRoutingModule
  ],
  declarations: [AdminAgendasPage]
})
export class AdminAgendasPageModule {}
