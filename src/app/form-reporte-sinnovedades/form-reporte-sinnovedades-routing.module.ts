import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReporteSinnovedadesPage } from './form-reporte-sinnovedades.page';

const routes: Routes = [
  {
    path: '',
    component: FormReporteSinnovedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormReporteSinnovedadesPageRoutingModule {}
