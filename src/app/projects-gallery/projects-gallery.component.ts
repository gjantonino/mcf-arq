import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})
export class ProjectsGalleryComponent implements OnInit {

  obras:Object;

  constructor(
    private http: HttpClient
  ) { }
  public getJSON() {
    return this.http.get("/assets/obras/obras.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(obras => {
      this.obras = obras;
    })
  }
}
