import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private graficasService:GraficasService
  ) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
        const labels = Object.keys( data );
        const values = Object.values( data );

        this.doughnutChartData = {
          labels: labels,
          datasets:[
            {
              data:values,
              backgroundColor: this.doughnutChartColors,
              hoverBackgroundColor: 'blue'
            }
          ]
        }
      });
  }

  public doughnutChartLabels: string[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: string[] = [
    '#F25E8C', 
    '#FC62DF', 
    '#D066E6', 
    '#B962FC', 
    '#895EF2',
  ]

  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };

}