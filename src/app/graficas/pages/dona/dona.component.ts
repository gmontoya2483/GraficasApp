import { Component, OnInit } from '@angular/core';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0D62FF',
        '#0C9FE8',
        '#00F9FF',
        '#0CE8A1',
        '#12FF62'
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
