import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { file } from '../models/file.models';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

 

  constructor(private http:HttpClient) { 

  }

  baseApiUrl:string = 'https://localhost:44308/';


  getAllFiles():Observable<file[]>{

    return  this.http.get<file[]>(this.baseApiUrl + 'api/file/all');

  }
  getAllDeletedFiles():Observable<file[]>{

    return  this.http.get<file[]>(this.baseApiUrl + 'api/file/deletedfile');

  }

  
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.baseApiUrl + 'api/file', formData);
  }

  deleteFile(fileName:string):Observable<any>{
    return this.http.delete(this.baseApiUrl+'api/file/'+ fileName);
  }

  downloadFile(fileName:string):Observable<any>{
    const options = {
      responseType: 'blob' as 'json' // Specify the response type as blob
    };
    return this.http.get(this.baseApiUrl + 'api/file/' + fileName, options);
  }

}
