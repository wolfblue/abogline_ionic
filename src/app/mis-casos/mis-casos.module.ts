import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCasosPageRoutingModule } from './mis-casos-routing.module';

import { MisCasosPage } from './mis-casos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCasosPageRoutingModule
  ],
  declarations: [MisCasosPage]
})
export class MisCasosPageModule {}
