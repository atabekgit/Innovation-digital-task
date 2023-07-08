import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContributionGraphService} from "../../services/contribution-graph.service";

@Component({
  selector: 'app-heatmap', templateUrl: './heatmap.component.html', styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  constructor(private http: HttpClient, private contributionGraphServiceService: ContributionGraphService) {
  }

  ngOnInit() {
    const today = new Date();
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const endDate = today;
    /*
        this.http.get('https://your-api-url/contributions').subscribe((data: any) => {
          const seriesData = this.generateSeriesData(data, startDate, endDate);
          this.renderChart(seriesData);
        });*/
    const seriesData = this.generateSeriesData(this.contributionGraphServiceService.createDb(), startDate, endDate);
    this.renderChart(seriesData);
  }

  generateSeriesData(data: any, startDate: Date, endDate: Date): any[] {
    const series = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const dateString = this.formatDate(currentDate);
      const contributions = data[dateString] || 0;

      series.push({
        x: currentDate, y: contributions
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return [{data: series}];
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  renderChart(seriesData: any[]) {
    const options = {
      series: seriesData, chart: {
        type: 'heatmap', height: 350
      }, plotOptions: {
        heatmap: {
          shadeIntensity: 0.5, colorScale: {
            ranges: [{from: 0, to: 0, name: 'No Contributions', color: '#ffffff'}, {
              from: 1,
              to: 9,
              name: '1-9 Contributions',
              color: '#f6d6d6'
            }, {from: 10, to: 19, name: '10-19 Contributions', color: '#f2a4a4'}, {
              from: 20,
              to: 29,
              name: '20-29 Contributions',
              color: '#ea6e6e'
            }, {from: 30, to: 1000, name: '30+ Contributions', color: '#e03a3a'}]
          }
        }
      }, dataLabels: {
        enabled: false
      }, xaxis: {
        type: 'datetime'
      }
    };

    // @ts-ignore
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
