import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinnovedadesPageRoutingModule } from './sinnovedades-routing.module';

import { SinnovedadesPage } from './sinnovedades.page';

//importamos el componente header personalizado
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SinnovedadesPageRoutingModule
  ],
  declarations: [SinnovedadesPage]
})
export class SinnovedadesPageModule {}
