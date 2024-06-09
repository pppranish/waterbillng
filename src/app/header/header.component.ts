import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {}
  collapsibleNavbar: boolean = false;

  toggleNavbar() {
    this.collapsibleNavbar = !this.collapsibleNavbar;
  }
  openLoginModal() {
   
    const modalRef = this.modalService.open(""); 
  }

}
