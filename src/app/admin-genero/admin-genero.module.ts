import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminGeneroPageRoutingModule } from './admin-genero-routing.module';

import { AdminGeneroPage } from './admin-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminGeneroPageRoutingModule
  ],
  declarations: [AdminGeneroPage]
})
export class AdminGeneroPageModule {}
