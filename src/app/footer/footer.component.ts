import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  scrollToTop() {
    // Implement the logic to scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
