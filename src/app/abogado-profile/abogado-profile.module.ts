import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadoProfilePageRoutingModule } from './abogado-profile-routing.module';

import { AbogadoProfilePage } from './abogado-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadoProfilePageRoutingModule
  ],
  declarations: [AbogadoProfilePage]
})
export class AbogadoProfilePageModule {}
