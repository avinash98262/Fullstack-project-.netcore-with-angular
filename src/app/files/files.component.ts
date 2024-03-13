import { Component, OnInit } from '@angular/core';
import { file } from '../models/file.models';
import { FilesService } from '../services/files.service';
import {  response } from 'express';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})

export class FilesComponent  {

  files :file[]=[];

  constructor(private fileservice:FilesService,private router:Router,private route:ActivatedRoute,private appcomponent:AppComponent){

  }

  ngOnInit(): void {
    
    this.fileservice.getAllFiles().subscribe({
      next:(file)=>{
        console.log(file);
        this.files=file;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }


  deleteFile(fileName: string): void {
    this.appcomponent.deleteFile(fileName);
    this.appcomponent.refreshPage();
  }

  downloadFile(fileName: string): void {
    this.appcomponent.downloadFile(fileName)
  }

}