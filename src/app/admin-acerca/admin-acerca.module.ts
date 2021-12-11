import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAcercaPageRoutingModule } from './admin-acerca-routing.module';

import { AdminAcercaPage } from './admin-acerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAcercaPageRoutingModule
  ],
  declarations: [AdminAcercaPage]
})
export class AdminAcercaPageModule {}
