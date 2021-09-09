import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { IDialogData } from 'src/app/interfaces/dialog-data';

@Component({
  selector: 'input-dialog',
  templateUrl: 'input-dialog.component.html',
})
export class InputDialogComponent {
  oldData: IDialogData;
  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {
    this.oldData = { name: data.name, link: data.link };
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  onUpdate(): void {
    this.dialogRef.close(this.oldData);
  }
}
