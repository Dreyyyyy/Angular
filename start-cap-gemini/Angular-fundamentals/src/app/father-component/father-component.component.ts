import { Component } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent {
  lastName = "da Silva"

  showFullName(fullName:any) {
    alert(`Full name: ${fullName}`);
  }
}
