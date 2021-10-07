import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importe ionic module
import { IonicModule } from '@ionic/angular';

//importe header-module de mi componente personalizado
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
