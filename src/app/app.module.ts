import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { DeletedFilesComponent } from './deleted-files/deleted-files.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilesService } from './services/files.service';




@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HomeComponent,
    FilesComponent,
    DeletedFilesComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    FilesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
