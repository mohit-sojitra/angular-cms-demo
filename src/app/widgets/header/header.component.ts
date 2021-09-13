import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from 'src/app/core/input-dialog/input-dialog.component';
import { IDialogData } from 'src/app/interfaces/dialog-data';
import { WidgetStorageService } from 'src/app/services/widget-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public backgroundColor;
  imgURL: string | ArrayBuffer;
  public imagePath: any;
  public widgetName;
  public selectedFile: File;
  navLinks: IDialogData[];
  constructor(
    public dialog: MatDialog,
    private widgetStorage: WidgetStorageService
  ) {
    this.backgroundColor = this.widgetStorage.backgroundColor;
    this.imgURL = this.widgetStorage.imgURL;
    this.imagePath = this.widgetStorage.imagePath;
    this.widgetName = this.widgetStorage.widgetName;
    this.selectedFile = this.widgetStorage.selectedFile;
    this.navLinks = this.widgetStorage.navLinks;
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '250px',
      data: this.navLinks[i],
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.navLinks[i] = data;
      this.widgetStorage.navLinks[i] = data;
    });
  }
  openImagePicker(): void {
    const element: HTMLElement = document.querySelector(
      'input[type="file"]'
    ) as HTMLElement;
    element.click();
  }
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
    this.widgetStorage.selectedFile = event.target.files[0];
    const reader = new FileReader();
    this.imagePath = this.selectedFile;
    this.widgetStorage.imagePath = this.selectedFile;
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (event) => {
      this.imgURL = reader.result;
      this.widgetStorage.imgURL = reader.result;
    };
  }
}
