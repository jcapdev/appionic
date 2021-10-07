import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinnovedadesPage } from './sinnovedades.page';

const routes: Routes = [
  {
    path: '',
    component: SinnovedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinnovedadesPageRoutingModule {}
