import { Component } from '@angular/core';
import { FilesService } from '../services/files.service';
import { title } from 'process';
import { file } from '../models/file.models';


import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private fileservice:FilesService,private router:Router,private route:ActivatedRoute){

  }
 

  search(): void {
    const searchTerm = (document.getElementById('title') as HTMLInputElement).value;
    this.router.navigate(['/search'], { queryParams: { title: searchTerm } });
  }

 

  

}
