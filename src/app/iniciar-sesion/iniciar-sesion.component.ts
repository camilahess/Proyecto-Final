import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fieldTextType: boolean | undefined;

  usuario = {
    correo: "",
    password: ""
  };

  constructor(private backend: BackendService, private router: Router, private login: LoginService) {
  }

  ngOnInit(): void {
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };

  }

  postUsuario() {
    this.backend.postUsuario(this.usuario).subscribe(() => {
      Swal.fire({
        icon: 'success',
        text: `Has iniciado sesión correctamente como: ${this.usuario.correo}`
      }).then(() => {
        this.login.sesionIniciada(this.usuario.correo);
        this.router.navigate(["/home"]);
      });
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
