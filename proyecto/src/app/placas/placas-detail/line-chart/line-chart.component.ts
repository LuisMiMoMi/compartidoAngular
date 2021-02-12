import { Component, Input } from '@angular/core';
import { Placa } from '../../placa';
import { PlacasService } from '../../placas.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent {

  placa: Placa;

  @Input() id: string;

  constructor(private placasService: PlacasService) { }

  ngOnInit(): void {
    this.placasService.getPlaca(this.id).subscribe(
      placa => this.placa= placa
    )
  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: this.placa, label: 'Producción ' },
  ];

  public chartLabels: Array<any> = ['0:00', '1:00',  '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}