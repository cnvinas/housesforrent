import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css'],
})
export class HouseDetailComponent implements OnInit {
  @Input() items;
  page: number;
  constructor() {}

  ngOnInit(): void {
    this.items;
  }
}
