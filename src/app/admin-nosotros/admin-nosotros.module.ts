import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNosotrosPageRoutingModule } from './admin-nosotros-routing.module';

import { AdminNosotrosPage } from './admin-nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNosotrosPageRoutingModule
  ],
  declarations: [AdminNosotrosPage]
})
export class AdminNosotrosPageModule {}
