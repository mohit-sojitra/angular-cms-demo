import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetService } from '../widget.service';
import { AdDirective } from './ad.directives';

@Component({
  selector: 'app-widget-body',
  templateUrl: './widget-body.component.html',
  styleUrls: ['./widget-body.component.scss'],
})
export class WidgetBodyComponent implements OnInit {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {
    this.viewContainerRef = this.adHost.viewContainerRef;
    this.widgetService.activeWidget.subscribe((activeWidget) => {
      this.viewContainerRef.clear();
      activeWidget.forEach((element) => {
        if (element.active) {
          this.addComponent(element.component);
        }
      });
    });
  }

  addComponent(component: any): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.createComponent(componentFactory);
  }
}
