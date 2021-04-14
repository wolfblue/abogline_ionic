import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AbogadoProfilePage} from './abogado-profile/abogado-profile.page';
import {ClienteProfilePage} from './cliente-profile/cliente-profile.page';
import {AbogadoDetalleCasoPage} from './abogado-detalle-caso/abogado-detalle-caso.page';
import {ClienteDetalleCasoPage} from './cliente-detalle-caso/cliente-detalle-caso.page';
import {ClienteDetalleAbogadoPage} from './cliente-detalle-abogado/cliente-detalle-abogado.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClienteProfilePage,
    AbogadoProfilePage,
    AbogadoDetalleCasoPage,
    ClienteDetalleCasoPage,
    ClienteDetalleAbogadoPage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
