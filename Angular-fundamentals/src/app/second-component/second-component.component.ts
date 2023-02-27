import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name = "Andrey";
  birthDate = "2000-02-17"
  urlImage = "/assets/shoroi.jpg";

  showBirthDate() {
    alert(`Andrey birthday: ${this.birthDate}`)
  }
}
