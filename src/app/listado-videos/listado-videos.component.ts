import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-listado-videos',
  templateUrl: './listado-videos.component.html',
  styleUrls: ['./listado-videos.component.css']
})
export class ListadoVideosComponent implements OnInit {
  videos:any;

  constructor(private backend: BackendService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.backend.getVideos().subscribe((videos) => {
      this.videos = videos;
      console.log(this.videos);
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
