import { Component , HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: NgbModal) {}

  isCollapsed = true; // Initialize as collapsed
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Automatically collapse the navbar on small screens
    this.isCollapsed = window.innerWidth < 992;
  }


  openLoginModal() {
    this.modalService.open(LoginComponent);
  }

}
