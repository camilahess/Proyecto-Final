import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:any = "";

  constructor(private backend: BackendService, private login: LoginService) { }

  ngOnInit(): void {
    this.usuario = this.login.usuarioSesion();
  }

  cerrarSesion() {
    this.login.cerrarSesion();
    this.usuario = "";
  }

}
