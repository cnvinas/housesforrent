import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visited-houses-card-container',
  templateUrl: './visited-houses-card-container.component.html',
  styleUrls: ['./visited-houses-card-container.component.css'],
})
export class VisitedHousesCardContainerComponent implements OnInit {
  @Input() items;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  openDetails(item) {
    this.route.navigate(['/details', item.overview.price]);
  }
}
