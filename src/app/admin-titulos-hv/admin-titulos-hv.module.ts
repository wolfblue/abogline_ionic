import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTitulosHvPageRoutingModule } from './admin-titulos-hv-routing.module';

import { AdminTitulosHvPage } from './admin-titulos-hv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTitulosHvPageRoutingModule
  ],
  declarations: [AdminTitulosHvPage]
})
export class AdminTitulosHvPageModule {}
