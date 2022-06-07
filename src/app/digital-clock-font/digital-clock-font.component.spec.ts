import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockFontComponent } from './digital-clock-font.component';

describe('DigitalClockFontComponent', () => {
  let component: DigitalClockFontComponent;
  let fixture: ComponentFixture<DigitalClockFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
