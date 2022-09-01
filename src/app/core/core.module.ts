import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CorePageRoutingModule } from './core-routing.module';
import { CorePage } from './core.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorePageRoutingModule,
    PdfViewerModule,
    IvyCarouselModule
  ],
  declarations: [CorePage]
})
export class CorePageModule {}
