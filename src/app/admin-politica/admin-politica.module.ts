import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPoliticaPageRoutingModule } from './admin-politica-routing.module';

import { AdminPoliticaPage } from './admin-politica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPoliticaPageRoutingModule
  ],
  declarations: [AdminPoliticaPage]
})
export class AdminPoliticaPageModule {}
