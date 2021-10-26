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
    path: 'recovery',
    loadChildren: () => import('./recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'register-caso',
    loadChildren: () => import('./register-caso/register-caso.module').then( m => m.RegisterCasoPageModule)
  },
  {
    path: 'consultar-caso',
    loadChildren: () => import('./consultar-caso/consultar-caso.module').then( m => m.ConsultarCasoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'abogados',
    loadChildren: () => import('./abogados/abogados.module').then( m => m.AbogadosPageModule)
  },
  {
    path: 'solicitar-documentacion',
    loadChildren: () => import('./solicitar-documentacion/solicitar-documentacion.module').then( m => m.SolicitarDocumentacionPageModule)
  },
  {
    path: 'cargar-documentacion',
    loadChildren: () => import('./cargar-documentacion/cargar-documentacion.module').then( m => m.CargarDocumentacionPageModule)
  },
  {
    path: 'consultar-documentacion',
    loadChildren: () => import('./consultar-documentacion/consultar-documentacion.module').then( m => m.ConsultarDocumentacionPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'admin-agendas',
    loadChildren: () => import('./admin-agendas/admin-agendas.module').then( m => m.AdminAgendasPageModule)
  },
  {
    path: 'admin-plantillas',
    loadChildren: () => import('./admin-plantillas/admin-plantillas.module').then( m => m.AdminPlantillasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
