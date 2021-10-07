import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("https://crsseguridad.live/app_crs/guardia/Consultareportenovedad.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });

   }


  ngOnInit() {
  }

}
