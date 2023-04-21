import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTextosPageRoutingModule } from './admin-textos-routing.module';

import { AdminTextosPage } from './admin-textos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTextosPageRoutingModule
  ],
  declarations: [AdminTextosPage]
})
export class AdminTextosPageModule {}
