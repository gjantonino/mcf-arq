import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomePageComponent, pathMatch: 'full'},
    { path: 'projects/:all', component: ProjectsGalleryComponent, pathMatch: 'full' },
    { path: 'project-details/:pid', component: ProjectDetailsComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
