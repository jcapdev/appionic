import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule} from '@angular/common/http';
//importamos el componente menu-principal
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';




@NgModule({
  declarations: [AppComponent, MenuPrincipalComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [ MenuPrincipalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
