import { Component } from '@angular/core';
import { file } from '../models/file.models';
import { FilesService } from '../services/files.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  files:file[]=[];

  constructor(private fileservice:FilesService,private router:Router,private route:ActivatedRoute,private appcomponent:AppComponent){

  }


  selectString(searchString:string):void{
      

    this.fileservice.getAllFiles().subscribe({
      next: (files) => {
        this.files = files.filter(file => file.fileTitle.includes(searchString));
        console.log(this.files);
        
      },
      error: (error) => {
        console.error("Error fetching files:", error);
      }
    });
 
  }

  deleteFile(fileName: string): void {
    this.appcomponent.deleteFile(fileName);
    this.router.navigate(['/files']);
  }

  downloadFile(fileName: string): void {
    this.appcomponent.downloadFile(fileName);
  }


}
