import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitComponent } from './digit/digit.component';
import { DigitalClockMainComponent } from './digital-clock-main.component';



@NgModule({
  declarations: [
    DigitComponent,
    DigitalClockMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DigitalClockMainComponent]
})
export class DigitalClock2Module { }
