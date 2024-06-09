import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  connections: any[] = []; // Array to hold water supply connections

  constructor() { }

  ngOnInit(): void {
    // Fetch water supply connections (Sample data for demonstration)
    this.connections = [
      { consumerNo: '001', name: 'Mr. Pranish Pradhan', address: '1234', type: 'Residential', email: 'pranish@example.com' },
      { consumerNo: '002', name: 'Mr. Sanskar Rai ', address: '4534', type: 'Commercial', email: 'Shansker@example.com' },
      { consumerNo: '002', name: 'Mr. maddsdsd ', address: '4523232', type: 'Commercial', email: 'Shansker@example.com' },
      { consumerNo: '002', name: 'Mr. pemba  ', address: '4534', type: 'Commercial', email: 'Shansker@example.com' },
      // Add more connections as needed
    ];
  }

  searchQuery: string = '';

  get filteredConnections() {
    if (!this.searchQuery) {
      return this.connections;
    }
    return this.connections.filter(connection =>
      connection.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get connectionCount(): number {
    return this.filteredConnections.length;
  }
}
