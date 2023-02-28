import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service2-example',
  templateUrl: './service2-example.component.html',
  styleUrls: ['./service2-example.component.css']
})
export class Service2ExampleComponent {
  description = "";

  constructor(public logger: LoggerService) {

  }

  addProduct() {
      this.logger.logIn(`The product ${this.description} has been added`);
  }
}
