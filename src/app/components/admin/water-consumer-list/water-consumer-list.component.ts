import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

interface DataItem {
  id: number;
  user_id: number;
  consumer_no: string;
  consumer_name: string;
  house_name: string;
  water_required_for: string;
  email: string;
}


@Component({
  selector: 'app-water-consumer-list',
  templateUrl: './water-consumer-list.component.html',
  styleUrls: ['./water-consumer-list.component.css']
})
export class WaterConsumerListComponent implements OnInit {
  items: MatTableDataSource<DataItem> = new MatTableDataSource<DataItem>();
  statusMessage: string | null = null;
  displayedColumns: string[] = ['consumer_no', 'consumer_name', 'house_name', 'water_required_for', 'email', 'actions'];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadConsumers();
  }

  loadConsumers(): void {
    this.http.get<DataItem[]>('assets/consumer.json').subscribe({
      next: data => {
        this.items.data = data;
      },
      error: err => {
        this.statusMessage = 'Failed to load consumers';
      }
    });
  }

  navigateToNewConnection(): void {
    this.router.navigate(['/applicant']);
  }

  editItem(id: number): void {
    console.log(`Edit item with id ${id}`);
  }

  viewItem(id: number, userId: number): void {
    console.log(`View item with id ${id} and user id ${userId}`);
  }

  updateItem(id: number, userId: number): void {
    console.log(`Update item with id ${id} and user id ${userId}`);
  }
}
