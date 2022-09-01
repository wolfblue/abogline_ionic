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
  },
  {
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
  },
  {
    path: 'buscar-casos',
    loadChildren: () => import('./buscar-casos/buscar-casos.module').then( m => m.BuscarCasosPageModule)
  },
  {
    path: 'registrar-caso',
    loadChildren: () => import('./registrar-caso/registrar-caso.module').then( m => m.RegistrarCasoPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'admin-quienes-somos',
    loadChildren: () => import('./admin-quienes-somos/admin-quienes-somos.module').then( m => m.AdminQuienesSomosPageModule)
  },
  {
    path: 'admin-nosotros',
    loadChildren: () => import('./admin-nosotros/admin-nosotros.module').then( m => m.AdminNosotrosPageModule)
  },
  {
    path: 'mis-casos',
    loadChildren: () => import('./mis-casos/mis-casos.module').then( m => m.MisCasosPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then( m => m.CorePageModule)
  },
  {
    path: 'admin-usuarios',
    loadChildren: () => import('./admin-usuarios/admin-usuarios.module').then( m => m.AdminUsuariosPageModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./contactenos/contactenos.module').then( m => m.ContactenosPageModule)
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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-solicitudes',
    loadChildren: () => import('./admin-solicitudes/admin-solicitudes.module').then( m => m.AdminSolicitudesPageModule)
  },
  {
    path: 'admin-actividades',
    loadChildren: () => import('./admin-actividades/admin-actividades.module').then( m => m.AdminActividadesPageModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./links/links.module').then( m => m.LinksPageModule)
  },  {
    path: 'respuesta-pagos',
    loadChildren: () => import('./respuesta-pagos/respuesta-pagos.module').then( m => m.RespuestaPagosPageModule)
  },
  {
    path: 'admin-contratos',
    loadChildren: () => import('./admin-contratos/admin-contratos.module').then( m => m.AdminContratosPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
