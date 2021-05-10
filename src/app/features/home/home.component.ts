import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchForAHouseService } from 'src/app/shared/services/searchForAHouse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  mostVisitedHouses = [];
  lastVisitedHouses = [];
  filterBy = 1;
  constructor(
    private route: Router,
    private housesService: SearchForAHouseService
  ) {}

  ngOnInit(): void {
    this.loadTotalHouses();
  }

  loadTotalHouses() {
    this.housesService.getTotalHouses().subscribe((res) => {
      this.mostVisitedHouses = res[0].slice(0, 5);
      this.lastVisitedHouses = res[0].slice(res[0].length - 5, res[0].length);
    });
  }

  setSelectedRadio(radioButtonSelected) {
    if (radioButtonSelected === 1) {
      this.filterBy = 1;
    } else if (radioButtonSelected === 2) {
      this.filterBy = 2;
    } else {
      this.filterBy = 3;
    }
  }

  getHouses(event) {
    if (
      event === 'searchIconClicked' ||
      (event.which === 13 && event.currentTarget.value != '')
    ) {
      let value = this.searchInput.nativeElement.value;
      this.route.navigate(['/listing', value, this.filterBy]);
    }
  }
}
