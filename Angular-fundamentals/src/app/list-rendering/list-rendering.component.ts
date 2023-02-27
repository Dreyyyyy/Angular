import { Component } from '@angular/core';
import { Smartphone } from '../types/Smartphone';

@Component({
  selector: 'app-list-rendering',
  templateUrl: './list-rendering.component.html',
  styleUrls: ['./list-rendering.component.css']
})
export class ListRenderingComponent {
  smartphones: Smartphone[] = [
    {id:1, name: "Smartphone XL", description: "Biggest smartphone", soldOut: false},
    {id:2, name: "Smartphone M", description: "Normal smartphone", soldOut: false},
    {id:3, name: "Smartphone P", description: "Tiniest smartphone", soldOut: true}
  ]
}
