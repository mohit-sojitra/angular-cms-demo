import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WidgetBodyComponent } from './widget-body/widget-body.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { HeaderComponent } from './widgets/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AdDirective } from './widget-body/ad.directives';
import { BodyComponent } from './widgets/body/body.component';
import { FileUploadComponent } from './widgets/file-upload/file-upload.component';
import { CardComponent } from './widgets/card/card.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    WidgetBodyComponent,
    AdDirective,
    BodyComponent,
    FileUploadComponent,
    CardComponent
  ],
  imports: [
    ColorPickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
