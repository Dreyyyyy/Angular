import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy{
  hour = new Date();
  timer: any = null!;

  @Input() text = "";

  ngOnInit(): void {
    console.log("The onInit event has been started");
    this.timer = setInterval(() => this.hour = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Event onChanges has been started with the following changes " + changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
