import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-clock',
  templateUrl: './my-clock.component.html',
  styleUrls: ['./my-clock.component.css']
})
export class MyClockComponent implements OnInit {
  @ViewChild('secHand' , { static: false })
  secHandRef!: ElementRef<HTMLDivElement>;
  @ViewChild('minHand' , { static: false })
  minHandRef!: ElementRef<HTMLDivElement>;
  @ViewChild('hourHand' , { static: false })
  hourHandRef!: ElementRef<HTMLDivElement>;
  time:Date =new Date();
  constructor() { 
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();

      this.updateClock();
      

    }, 1);
  }

  updateClock()
  {
    this.secHandRef.nativeElement.style.transform = 'rotate('+(this.time.getSeconds()*6)+'deg)';
    this.minHandRef.nativeElement.style.transform = 'rotate('+(this.time.getMinutes()*6)+'deg)';
    this.hourHandRef.nativeElement.style.transform = 'rotate('+(this.time.getHours()*30 + this.time.getMinutes()*0.5)+'deg)';

 }



}
