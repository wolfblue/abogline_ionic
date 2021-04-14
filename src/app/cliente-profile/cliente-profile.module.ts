import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteProfilePageRoutingModule } from './cliente-profile-routing.module';

import { ClienteProfilePage } from './cliente-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteProfilePageRoutingModule
  ],
  declarations: [ClienteProfilePage]
})
export class ClienteProfilePageModule {}
