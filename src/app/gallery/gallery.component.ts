import { Component, OnInit ,Input} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { GallerypopupComponent } from '../gallerypopup/gallerypopup.component';

import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryPopUpDialog: MatDialogRef<GallerypopupComponent>;
  constructor(private dialogModel: MatDialog) {
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 1});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 2});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 3});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 4});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 5});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 6});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 7});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 8});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 9});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 10});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 11});
    this.ImageDetailList.push({src: "http://placehold.it/400x300",identity: 12});
  }
  ImageDetailList = new Array<ImageDetail>(); 
  ngOnInit() {   
  }

  openGalleryPopUp() {
    this.galleryPopUpDialog = this.dialogModel.open(GallerypopupComponent,{
      data:{
        ParentPhotoID:"details"
      }
    });
    }    
}
type ImageDetail = { src: string, identity: number };
