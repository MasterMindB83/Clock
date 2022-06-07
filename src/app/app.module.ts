import { DigitalClock2Module } from './digital-clock-2/digital-clock-2.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyClockComponent } from './my-clock/my-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { DigitalClockFontComponent } from './digital-clock-font/digital-clock-font.component';
import { DigitalClockMainComponent } from './digital-clock-2/digital-clock-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClockComponent,
    DigitalClockComponent,
    DigitalClockFontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
