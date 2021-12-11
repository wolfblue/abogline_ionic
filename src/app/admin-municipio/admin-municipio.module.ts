import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMunicipioPageRoutingModule } from './admin-municipio-routing.module';

import { AdminMunicipioPage } from './admin-municipio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMunicipioPageRoutingModule
  ],
  declarations: [AdminMunicipioPage]
})
export class AdminMunicipioPageModule {}
