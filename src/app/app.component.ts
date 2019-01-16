import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  simpleDialog: MatDialogRef<SimpleDialogComponent>;
 
  constructor(private dialogModel: MatDialog) { }
  
  ngOnInit() {
  }
  
  dialog() {
  this.simpleDialog = this.dialogModel.open(SimpleDialogComponent);
  }
}

