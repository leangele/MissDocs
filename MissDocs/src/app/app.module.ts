import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DocumentsComponent } from './components/documents/documents.component';

import { AppRoutes } from './app.routes';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    DocumentsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
