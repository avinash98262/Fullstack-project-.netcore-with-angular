import { Component, OnInit } from '@angular/core';
import { file } from '../models/file.models';
import { FilesService } from '../services/files.service';
import { response } from 'express';

@Component({
  selector: 'app-deleted-files',
  templateUrl: './deleted-files.component.html',
  styleUrl: './deleted-files.component.css'
})
export class DeletedFilesComponent implements OnInit{

  deletedfiles :file[]=[];

  constructor(private filesevice:FilesService){

  }

  ngOnInit(): void {

    this.filesevice.getAllDeletedFiles().subscribe({
      next:(file)=>{
        this.deletedfiles=file;
        console.log(file);
      },
      error:(response)=>{
        console.log(response); 
      }
    })
    
  }

}
