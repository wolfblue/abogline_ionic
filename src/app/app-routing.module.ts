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
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'abogado-profile',
    loadChildren: () => import('./abogado-profile/abogado-profile.module').then( m => m.AbogadoProfilePageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'cliente-caso',
    loadChildren: () => import('./cliente-caso/cliente-caso.module').then( m => m.ClienteCasoPageModule)
  },
  {
    path: 'cliente-profile',
    loadChildren: () => import('./cliente-profile/cliente-profile.module').then( m => m.ClienteProfilePageModule)
  },
  {
    path: 'abogado-buscar-caso',
    loadChildren: () => import('./abogado-buscar-caso/abogado-buscar-caso.module').then( m => m.AbogadoBuscarCasoPageModule)
  },
  {
    path: 'abogado-detalle-caso',
    loadChildren: () => import('./abogado-detalle-caso/abogado-detalle-caso.module').then( m => m.AbogadoDetalleCasoPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'cliente-buscar-caso',
    loadChildren: () => import('./cliente-buscar-caso/cliente-buscar-caso.module').then( m => m.ClienteBuscarCasoPageModule)
  },
  {
    path: 'cliente-detalle-caso',
    loadChildren: () => import('./cliente-detalle-caso/cliente-detalle-caso.module').then( m => m.ClienteDetalleCasoPageModule)
  },
  {
    path: 'cliente-detalle-abogado',
    loadChildren: () => import('./cliente-detalle-abogado/cliente-detalle-abogado.module').then( m => m.ClienteDetalleAbogadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
