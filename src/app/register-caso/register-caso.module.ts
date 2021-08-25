import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCasoPageRoutingModule } from './register-caso-routing.module';

import { RegisterCasoPage } from './register-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCasoPageRoutingModule
  ],
  declarations: [RegisterCasoPage]
})
export class RegisterCasoPageModule {}
