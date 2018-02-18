import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      title: 'Card 1'
    },
    {
      title: 'Card 2'
    },
    {
      title: 'Card 3'
    },
    {
      title: 'Card 4'
    }
  ];
}
