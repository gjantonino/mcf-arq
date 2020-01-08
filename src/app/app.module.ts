import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './logo/logo.component';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NgbModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LogoComponent,
    AppComponent,
    SideNavComponent,
    ProjectsGalleryComponent,
    HomePageComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
