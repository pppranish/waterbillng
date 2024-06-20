import { Component , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {
  @Output() previousStep = new EventEmitter<void>();

  previous() {
    this.previousStep.emit();
  }
}
