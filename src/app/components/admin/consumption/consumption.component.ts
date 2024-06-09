import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent {
  selectedStartMonth: string = '';
  selectedStartYear: string = '';
  selectedEndMonth: string = '';
  selectedEndYear: string = '';



  get months(): string[] {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }

  get years(): string[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 2000; year--) {
      years.push(year.toString());
    }
    return years;
  }

  processConsumption() {
    // Logic to process the consumption based on selected start and end dates
    console.log('Processing consumption from', this.selectedStartMonth, this.selectedStartYear, 'to', this.selectedEndMonth, this.selectedEndYear);
  }

  faCalander=faCalendar;
}
