import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-component',
  templateUrl: './first-page-component.component.html',
  styleUrls: ['./first-page-component.component.css']
})
export class FirstPageComponentComponent {
  constructor(private router: Router) {
    
  }

  moveToSecondPage() {
    this.router.navigate(["second-page"]);
  }
}
