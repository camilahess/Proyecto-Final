import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  imagenes:any;

  constructor(private backend: BackendService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImagenes();


  }

  getImagenes() {
    this.backend.getImagenes().subscribe((imagenes) => {
      this.imagenes = imagenes;
      console.log(this.imagenes);
    })
  }

  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
