import { AuthorService } from './../author.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = "Angular";
  subtitle = "Authors";
  authors;

  constructor(service: AuthorService) {
    this.authors = service.getAuthor();
  }
}
