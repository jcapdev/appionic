import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("https://crsseguridad.live/app_crs/guardia/ConsultaIncidencia.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });

   }

  ngOnInit() {
  }

}
