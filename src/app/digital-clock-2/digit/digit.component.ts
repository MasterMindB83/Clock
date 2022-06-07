import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css']
})
export class DigitComponent implements OnInit {
  @Input('color') color?: string;
  @Input('num') num?: string;
  inactiveColor: string;
  constructor() { 
    this.inactiveColor = "#005500"
  }

  ngOnInit(): void {
  }

}
