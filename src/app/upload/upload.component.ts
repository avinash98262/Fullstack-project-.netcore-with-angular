import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';
import { error } from 'console';
import { file } from '../models/file.models';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})

export class UploadComponent {

  selectedFile: File | null = null;

  constructor(private fileService: FilesService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    this.fileService.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log('File uploaded successfully:', response);
        this.clearFileInput();
      },
      error => {
        console.error('Error uploading file:', error);
      }
    );
   
  }

  private clearFileInput():void{
    const fileInput:any= document.getElementById('file');
    if(fileInput){
      fileInput.value= null;
      this.selectedFile= null;
    }
  }
}