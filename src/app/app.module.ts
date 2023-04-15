import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgComponent } from './components/svg/svg.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SvgGridComponent } from './components/svg-grid/svg-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SafeHtmlPipe,
    SvgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
