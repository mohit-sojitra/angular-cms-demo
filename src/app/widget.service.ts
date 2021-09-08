import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWidgetModel } from './widget.model';
import { BodyComponent } from './widgets/body/body.component';
import { CardComponent } from './widgets/card/card.component';
import { FileUploadComponent } from './widgets/file-upload/file-upload.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { HeaderComponent } from './widgets/header/header.component';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  listOfComponent: IWidgetModel[] = [
    { name: 'Header', component: HeaderComponent, active: false },
    { name: 'File upload', component: FileUploadComponent, active: false },
    { name: 'Card', component: CardComponent, active: false },
    { name: 'Body', component: BodyComponent, active: false },
    { name: 'Footer', component: FooterComponent, active: false },
  ];
  activeWidget = new BehaviorSubject<IWidgetModel[]>([]);

  constructor() {}

  addWidget(index): void {
    if (this.listOfComponent[index].active) {
      this.listOfComponent[index].active = false;
    } else {
      this.listOfComponent[index].active = true;
    }
    this.activeWidget.next(this.listOfComponent);
  }

  clear(): void {
    this.listOfComponent.forEach((element) => {
      element.active = false;
    });
    this.activeWidget.next([]);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.listOfComponent,
      event.previousIndex,
      event.currentIndex
    );
    this.activeWidget.next(this.listOfComponent);
  }
}
