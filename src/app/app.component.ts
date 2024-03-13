import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
  
  constructor(private fileservice:FilesService,private router:Router,private route:ActivatedRoute){

  }
 

  refreshPage(): void {
    // Get the current route URL
    const currentUrl = this.router.url;
    
    // Navigate to the current route URL
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      // Navigate back to the original URL
      this.router.navigate([currentUrl]);
    });
  }

  deleteFile(fileName: string): void {
    this.fileservice.deleteFile(fileName).subscribe({
      next: () => {
        console.log(`File '${fileName}' deleted successfully.`);
       
      },
      error: (error) => {
        console.error(`Error deleting file '${fileName}':`, error);
       
      }
    });
  }

  downloadFile(fileName: string): void {
   
    this.fileservice.downloadFile(fileName).subscribe(response => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, error => {
      console.error(`Error downloading file '${fileName}':`, error);
    });
  }
}
