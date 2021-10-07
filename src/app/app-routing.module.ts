import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 /*  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: 'supervisor',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    component:LoginComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
    component:AuthComponent
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./supervisor/supervisor.module').then( m => m.SupervisorPageModule)
  },  {
    path: 'incidencias',
    loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'form-reporte-sinnovedades',
    loadChildren: () => import('./form-reporte-sinnovedades/form-reporte-sinnovedades.module').then( m => m.FormReporteSinnovedadesPageModule)
  },






 
  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
