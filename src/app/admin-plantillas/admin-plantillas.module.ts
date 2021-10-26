import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPlantillasPageRoutingModule } from './admin-plantillas-routing.module';

import { AdminPlantillasPage } from './admin-plantillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPlantillasPageRoutingModule
  ],
  declarations: [AdminPlantillasPage]
})
export class AdminPlantillasPageModule {}
