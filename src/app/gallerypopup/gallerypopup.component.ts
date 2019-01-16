import { Component,  OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
 


@Component({
  selector: 'app-gallerypopup',
  templateUrl: './gallerypopup.component.html',
  styleUrls: ['./gallerypopup.component.css']
})
export class GallerypopupComponent implements OnInit {



  ngOnInit() {
    document.getElementById("imgPopUp").setAttribute('src', 'http://placehold.it/550x450');
  }

  constructor(
    public dialogRef: MatDialogRef<GallerypopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      alert(this.data.ParentPhotoID);
    }
    
    close(): void {
    this.dialogRef.close();
    }

    previousPopupImage(): void{
    document.getElementById("imgPopUp").setAttribute('src', 'http://placehold.it/550x400');

    }
    nextPopupImage(): void{
      document.getElementById("imgPopUp").setAttribute('src', 'http://placehold.it/550x500');
  
      }
  

}
