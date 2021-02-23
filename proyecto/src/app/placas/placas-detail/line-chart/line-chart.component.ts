import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  @Input()
  production!: Array<number>;

  product: Array<number> = [30];
  constructor() { }

  ngOnInit() {
    this.añadirElementos();
    this.lineChartData = [
      { data: this.product, label: 'Producción estimada' },
      { data: this.production, label: 'Producción media de las placas' }
    ]
    
  }

  añadirElementos(){
    for (let index = 0; index < 24; index++) {
      setTimeout(() => this.product.push(Math.floor(Math.random()*(400-10)+10)), Math.floor(Math.random()*5000))
    }
  }

  public lineChartData: ChartDataSets[];

  public lineChartLabels: Label[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,255,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
