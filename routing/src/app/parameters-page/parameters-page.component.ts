import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameters-page',
  templateUrl: './parameters-page.component.html',
  styleUrls: ['./parameters-page.component.css']
})
export class ParametersPageComponent implements OnInit {
  id: number | null = null;
  age: number | null = null;
  name: string | null = "";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });

    this.route.queryParamMap.subscribe(params => {
      this.age = Number(params.get("age"));
      this.name = params.get("name");
    })
  }
}
