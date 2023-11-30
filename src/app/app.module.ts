import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Unidad1Component } from './components/unidad-1/unidad-1.component';
import { Unidad2Component } from './components/unidad-2/unidad-2.component';
import { Unidad3Component } from './components/unidad-3/unidad-3.component';
import { Unidad4Component } from './components/unidad-4/unidad-4.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Unidad1Component,
    Unidad2Component,
    Unidad3Component,
    Unidad4Component,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
