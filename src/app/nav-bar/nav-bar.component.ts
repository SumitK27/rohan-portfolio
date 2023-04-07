import { Component, Input } from '@angular/core';
import { Navbar } from '../portfolio.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() navBarData!: Navbar;

  isNavBarExpanded = false;

  openNavbar() {
    this.isNavBarExpanded = true;
  }

  closeNavbar() {
    this.isNavBarExpanded = false;
  }
}
