import { Component, OnInit } from '@angular/core';
import {GraficasService} from '../../services/graficas.service';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public isProd = environment.production;

  public doughnutChartLabels: Label[] = [
     // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [ 350, 450, 100, 150]
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

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    if (this.isProd) {
      return;
    }

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
        }
      );

  }

}
