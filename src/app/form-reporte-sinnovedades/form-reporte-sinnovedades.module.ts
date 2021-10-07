import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormReporteSinnovedadesPageRoutingModule } from './form-reporte-sinnovedades-routing.module';

import { FormReporteSinnovedadesPage } from './form-reporte-sinnovedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormReporteSinnovedadesPageRoutingModule
  ],
  declarations: [FormReporteSinnovedadesPage]
})
export class FormReporteSinnovedadesPageModule {}
