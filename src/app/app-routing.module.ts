import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'perfil-cliente',
    loadChildren: () => import('./perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'admin-city',
    loadChildren: () => import('./admin-city/admin-city.module').then( m => m.AdminCityPageModule)
  },
  {
    path: 'admin-genero',
    loadChildren: () => import('./admin-genero/admin-genero.module').then( m => m.AdminGeneroPageModule)
  },
  {
    path: 'admin-tipo-documento',
    loadChildren: () => import('./admin-tipo-documento/admin-tipo-documento.module').then( m => m.AdminTipoDocumentoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
