import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.css']
})
export class SonComponentComponent {
  @Input() lastName = "";
  @Output() showName = new EventEmitter();

  name = "";
}
