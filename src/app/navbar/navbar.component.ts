import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public widgetService: WidgetService) {}

  ngOnInit(): void {
    console.log(this.widgetService.listOfComponent);
  }
  addWidget(widget): void {
    this.widgetService.addWidget(widget);
  }
  clearWidget(): void {
    this.widgetService.clear();
  }
  drop(event: CdkDragDrop<string[]>): void {
    this.widgetService.drop(event);
  }
}
