import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; //rutas

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//componentes
import { ListadoConciertosComponent } from './listado-conciertos/listado-conciertos.component';

import { ListadoVideosComponent } from './listado-videos/listado-videos.component';
import { Carrousel1Component } from './carrousel1/carrousel1.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { AlbumHover1Component } from './album-hover1/album-hover1.component';
import { AlbumHover2Component } from './album-hover2/album-hover2.component';
import { AlbumHover3Component } from './album-hover3/album-hover3.component';
import { AlbumHover4Component } from './album-hover4/album-hover4.component';
import { AlbumHover5Component } from './album-hover5/album-hover5.component';
import { AlbumHover6Component } from './album-hover6/album-hover6.component';
import { AlbumHover7Component } from './album-hover7/album-hover7.component';
import { InstagramComponent } from './instagram/instagram.component';
import { Carrousel2Component } from './carrousel2/carrousel2.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';

//ROUTE para navegación entre componentes
const APP_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },//pantalla principal localhost:4200
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    ListadoConciertosComponent,
    ListadoVideosComponent,
    Carrousel1Component,
    ScrollToTopComponent,
    AlbumHover1Component,
    AlbumHover2Component,
    AlbumHover3Component,
    AlbumHover4Component,
    AlbumHover5Component,
    AlbumHover6Component,
    AlbumHover7Component,
    InstagramComponent,
    Carrousel2Component,
    IniciarSesionComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking', onSameUrlNavigation: 'reload' }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
