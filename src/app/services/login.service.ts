import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario = {
    correo: "",
    password: ""
  };


  constructor() {
  }
  //guarda el correo
  sesionIniciada(correo:string) {
    localStorage.setItem("login", correo);
  }

  //devuelve
  usuarioSesion() {
    return localStorage.getItem("login");
  }

  cerrarSesion(){
    localStorage.removeItem("login");
  }
}
