import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
 
  formAuth = new FormGroup({
    password: new FormControl('')
  });

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() { }

  public iniciarSesion():void{
   
    this.authService.iniciarSesion(this.formAuth.value)
      .subscribe((response) => {
        if((response.status == 200  && response.login)){
          console.log(response)
          console.log("inicioS")
          this.router.navigate(['guardia'])
         
          //  ALERTA DESPUÉS DE LOGUEARSE window.alertController = alertController;
          
        }else{
          console.log(response.data)
        }
      },(error ) => {
       console.log(error)
    });
  }
}
  interface AlertButton {
    text: string;
    role?: 'cancel' | 'destructive' | string;
    cssClass?: string | string[];
    handler?: (value: any) => boolean | void | {[key: string]: any};
  }


