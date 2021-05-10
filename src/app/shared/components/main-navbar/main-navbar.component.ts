import { Component } from '@angular/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.html',
  styleUrls: ['./main-navbar.css'],
})
export class MainNavBarComponent {
  show = false;

  toggleMenu() {
    this.show = !this.show;
  }
}
