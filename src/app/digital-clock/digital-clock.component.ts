import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  time:Date = new Date();
  sec2:string="number_0";
  sec1:string="number_0"
  hour1:string="number_0";
  hour2:string="number_0"
  min1:string="number_0";
  min2:string="number_0"

  @ViewChild('sec2img', { static: false })
  sec2Ref!: ElementRef<HTMLImageElement>;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();

      this.updateClock();
      

    }, 1);
  }
  updateClock()
  {
    let seconds = this.time.getSeconds().toString();
    if(seconds.length>1)
    {
      this.sec1 = "number_" + seconds.substring(0,1);
      this.sec2 = "number_" + seconds.substring(1,2);
    }
    else{
      this.sec1 = "number_0";
      this.sec2 = "number_" + seconds;
    }

    let hours = this.time.getHours().toString();
    if(hours.length>1)
    {
      this.hour1 = "number_" + hours.substring(0,1);
      this.hour2 = "number_" + hours.substring(1,2);
    }
    else{
      this.hour1 = "number_0";
      this.hour2 = "number_" + hours;
    }


    let minutes = this.time.getMinutes().toString();
    if(minutes.length>1)
    {
      this.min1 = "number_" + minutes.substring(0,1);
      this.min2 = "number_" + minutes.substring(1,2);
    }
    else{
      this.min1 = "number_0";
      this.min2 = "number_" + minutes;
    }




  }

}
