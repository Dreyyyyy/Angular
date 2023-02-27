import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personalized-component',
  templateUrl: './personalized-component.component.html',
  styleUrls: ['./personalized-component.component.css']
})
export class PersonalizedComponentComponent {
  @Input() name = ""
  @Input() lastName = "";
}
