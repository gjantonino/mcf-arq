import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcf-arq';
  currentClass = 'homePage';
  background = ""
  textColor = "#FFF";
  opacityFade = 1;
  bgColor = "transparent";

  currentSection: string = 'HOME';
  sideNavClass = "sideNavHome";

  onSectionClick(item: string) {
    this.currentSection = item
    //this.router.navigate([item]);

    if (this.currentSection === "HOME") {
      this.background = 'url("/assets/home-background_1920x1080.jpg")';
      this.currentClass = "homePage"
      this.textColor = "#FFF";
      this.bgColor = "transparent";

    } else {
      this.currentClass = "noBackground"
      this.background = "none";
      this.textColor = "#FFF";
      this.bgColor = "#000";
      

    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {  
    if ( window.location.pathname === "/") {
      this.background = 'url("/assets/home-background_1920x1080.jpg")';
      this.currentClass = "homePage"
      this.textColor = "#FFF";
      this.bgColor = "transparent";
    } else {
      this.currentClass = "noBackground"
      this.background = "none";
      this.textColor = "#FFF";
      this.bgColor = "#000";
    }
  }
}
