import {Component, ElementRef, ViewChild} from '@angular/core';
import { ChartService} from '../chart.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AiRacingWebApp';

  @ViewChild('chart') el: ElementRef;

  constructor(private chartService: ChartService) {  }

  ngOnInit() {
    this.basicChart()
  }

  basicChart() {
    const element = this.el.nativeElement

    const data = [{
      x: [1,2,3,4],
      y: [1,2,3,4]

    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot (element, data, style)

  }

}
