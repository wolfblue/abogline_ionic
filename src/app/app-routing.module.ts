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
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
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
  },  {
    path: 'admin-municipio',
    loadChildren: () => import('./admin-municipio/admin-municipio.module').then( m => m.AdminMunicipioPageModule)
  },
  {
    path: 'admin-acerca',
    loadChildren: () => import('./admin-acerca/admin-acerca.module').then( m => m.AdminAcercaPageModule)
  },
  {
    path: 'admin-politica',
    loadChildren: () => import('./admin-politica/admin-politica.module').then( m => m.AdminPoliticaPageModule)
  },
  {
    path: 'consultar-abogados',
    loadChildren: () => import('./consultar-abogados/consultar-abogados.module').then( m => m.ConsultarAbogadosPageModule)
  },
  {
    path: 'admin-titulos-hv',
    loadChildren: () => import('./admin-titulos-hv/admin-titulos-hv.module').then( m => m.AdminTitulosHvPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
