import { Injectable } from '@angular/core';
import { IDialogData } from '../interfaces/dialog-data';

@Injectable({
  providedIn: 'root',
})
export class WidgetStorageService {
  public backgroundColor = '#bacad8';
  public imgURL: string | ArrayBuffer = '/assets/header-logo.jpg';
  public imagePath: any;
  public widgetName = 'Header';
  public selectedFile: File;
  public navLinks: IDialogData[] = [
    { name: 'home', link: '/home' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/contact' },
    { name: 'service', link: '/services' },
  ];
  constructor() {}
}
