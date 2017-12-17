import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards = [
    {
      title: 'Sales Leaders'
    },
    {
      title: 'Sales Goal'
    },
    {
      title: 'Top Sales'
    },
    {
      title: 'Pending Sales'
    }
  ];

  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(() => {
      const data = google.visualization.arrayToDataTable([
        ['Customer', 'Sale Price'],
        ['Corp A', 10000],
        ['Corp B', 2000],
        ['Corp C', 5000],
        ['Corp D', 1000]
      ]);

      for (const elm of (<any>document.getElementsByClassName('chart'))) {
        const chart = new google.visualization.PieChart(elm);
        chart.draw(data, {});
      }
    });
  }
}
