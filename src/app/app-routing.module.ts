import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { DeletedFilesComponent } from './deleted-files/deleted-files.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
 
  {path:'', component:HomeComponent, title:'Home'},
  {path:'upload', component:UploadComponent, title:'upload'},
  {path:'files', component:FilesComponent, title:'files'},
  {path:'deletedfiles', component:DeletedFilesComponent, title:'deletedfiles'},
  {path:'search', component:SearchComponent, title:'searchFiles'},
  {path:'**', component:PageNotFoundComponent, title:'Page-Not-Found'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
