import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-carrousel1',
  templateUrl: './carrousel1.component.html',
  styleUrls: ['./carrousel1.component.css']
})
export class Carrousel1Component implements OnInit {

  constructor(private backend: BackendService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
