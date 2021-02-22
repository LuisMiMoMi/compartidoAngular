import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Placa } from '../../placa';
import { PlacasService } from '../../placas.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  /*@Input()
  id: string;*/

  @Input()
  production!: Array<number>;
  
  constructor(private placasService: PlacasService) { }

  ngOnInit() {
    /*this.placasService.getPlaca(this.id).subscribe(
      p => this.production = p.production
    )*/
    this.lineChartData = [
      { data: this.production, label: 'Producción estimada' },
    ]
  }

  public lineChartData: ChartDataSets[];

  public lineChartLabels: Label[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
