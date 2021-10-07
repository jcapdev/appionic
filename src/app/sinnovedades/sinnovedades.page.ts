import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sinnovedades',
  templateUrl: './sinnovedades.page.html',
  styleUrls: ['./sinnovedades.page.scss'],
})
export class SinnovedadesPage implements OnInit {

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("https://crsseguridad.live/app_crs/guardia/ConsultareporteSinnovedad.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });

   }

  ngOnInit() {
  }

}
