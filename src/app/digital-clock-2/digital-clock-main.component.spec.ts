import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockMainComponent } from './digital-clock-main.component';

describe('DigitalClockMainComponent', () => {
  let component: DigitalClockMainComponent;
  let fixture: ComponentFixture<DigitalClockMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
