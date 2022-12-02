import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


@Component({
  selector: 'app-listado-conciertos',
  templateUrl: './listado-conciertos.component.html',
  styleUrls: ['./listado-conciertos.component.css']
})
export class ListadoConciertosComponent implements OnInit {
  conciertos:any;

  constructor(private backend: BackendService) { }

  //ngOnInIt petición HTTP, para verlo en web
  ngOnInit(): void {
    registerLocaleData(localeEs);
    this.getConciertos();
  }

  getConciertos() {
    this.backend.getConciertos().subscribe((conciertos) => {
      this.conciertos = conciertos;
    })
  }

}
