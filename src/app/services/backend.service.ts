import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const SERVER = `http://localhost:8080/`;


@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }

  //Accedo a conciertos
  getConciertos() {
    return this.http.get(`${SERVER}conciertos`); // es lo mismo a ( SERVER + 'conciertos')
  }

  getVideos() {
    return this.http.get(`${SERVER}videos`);
  }

  getImagenes() {
    return this.http.get(`${SERVER}instaimages`);
  }

  postUsuario(usuario: any) {
    return this.http.post(`${SERVER}auth/login`, usuario);
  }


}
