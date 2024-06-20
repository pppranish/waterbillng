import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  totalRevenueWater: number = 0;
  totalRevenueSewerage: number = 0;
  totalActiveConnectionWater: number = 0;
  totalActiveConnectionSewerage: number = 0;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.getPaymentCollectionSummaryPhe().subscribe((data: any) => {
      this.totalRevenueWater = this.calculateTotalRevenue(data.water);
      this.totalRevenueSewerage = this.calculateTotalRevenue(data.sewerage);
      this.totalActiveConnectionWater = data.water.active_connections;
      this.totalActiveConnectionSewerage = data.sewerage.active_connections;
      
      // Call render functions for charts
      this.renderMonthlyRevenueChart(data.water);
      this.renderZoneConnectionChart();
      this.renderDistrictConnectionChart();
    });
  }

  calculateTotalRevenue(data: any): number {
    return data.bill + data.cost_of_application_form + data.new_connection_fee + data.shifting_charge;
  }

  renderMonthlyRevenueChart(waterData: any) {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Bill', 'Application Form', 'New Connection Fee', 'Shifting Charge'],
          datasets: [{
            label: 'Total Revenue (Water)',
            data: [
              waterData.bill,
              waterData.cost_of_application_form,
              waterData.new_connection_fee,
              waterData.shifting_charge
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  renderZoneConnectionChart() {
    const ctx = document.getElementById('chart-area') as HTMLCanvasElement;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
          datasets: [{
            label: 'Total Connections',
            data: [120, 100, 180, 150, 200],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        }
      });
    }
  }

  renderDistrictConnectionChart() {
    const ctx = document.getElementById('line-chart') as HTMLCanvasElement;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'District wise Total Connections',
            data: [50, 60, 70, 80, 90, 100],
            borderColor: "#3e95cd",
            fill: false
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'District wise Total Connection'
            }
          }
        }
      });
    }
  }
}
