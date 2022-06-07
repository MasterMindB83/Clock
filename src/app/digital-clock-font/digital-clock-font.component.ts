import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock-font',
  templateUrl: './digital-clock-font.component.html',
  styleUrls: ['./digital-clock-font.component.css']
})
export class DigitalClockFontComponent implements OnInit {

  constructor() { }
  time = new Date();
  timeFortmated:string="00:00:00";

  ngOnInit(): void {
     setInterval(()=>{

      this.time= new Date();
      this.updateClock();
     },1);
  }
  updateClock()
  {

    let hours = this.time.getHours().toString();
    if(hours.length>1)
    {
      this.timeFortmated = hours;
    }
    else{
      
      this.timeFortmated = "0"+hours;
    }


    let minutes = this.time.getMinutes().toString();
    if(minutes.length>1)
    {
      this.timeFortmated += ":" + minutes;
    }
    else{
      this.timeFortmated += ":0" + minutes;
    }

    let seconds = this.time.getSeconds().toString();
    if(seconds.length>1)
    {
      this.timeFortmated += ":" + seconds;
    }
    else{
      this.timeFortmated += ":0" + seconds;
    }
  }
}
