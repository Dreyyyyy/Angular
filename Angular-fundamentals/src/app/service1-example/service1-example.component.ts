import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service1-example',
  templateUrl: './service1-example.component.html',
  styleUrls: ['./service1-example.component.css']
})
export class Service1ExampleComponent {
  name = "";

  constructor(private logger: LoggerService) {

  }

  addName() {
    this.logger.logIn(`Name ${this.name} has been added`);
  }
}
