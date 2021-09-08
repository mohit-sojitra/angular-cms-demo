import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public backgroundColor = '#1973c0';
  widgetName = 'Header';
  constructor() { }

  ngOnInit(): void {
  }

}
