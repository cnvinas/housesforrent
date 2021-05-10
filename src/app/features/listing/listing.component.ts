import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchForAHouseService } from 'src/app/shared/services/searchForAHouse.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  housesTotal = [];
  favHouses = [];
  itemForSearchHouses;
  filterForSearchHouses;
  mostVisitedHouses = [];
  lastVisitedHouses = [];
  filterBy = 1;
  constructor(
    private searchService: SearchForAHouseService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemForSearchHouses = this.activatedRoute.snapshot.paramMap.get(
      'item'
    );
    this.filterForSearchHouses = this.activatedRoute.snapshot.paramMap.get(
      'filter'
    );
    this.getHomes(this.itemForSearchHouses, this.filterForSearchHouses);
    this.getTotalHouses();
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

  getHomes(itemForSearchHouses, filterForSearchHouses) {
    this.searchService
      .getHouses(itemForSearchHouses, filterForSearchHouses)
      .subscribe(
        (res) => {
          this.favHouses = res[0].slice(0, 5);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getTotalHouses() {
    this.searchService.getTotalHouses().subscribe(
      (res) => {
        this.housesTotal = res[0];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getHouses(event) {
    if (
      event === 'searchIconClicked' ||
      (event.which === 13 && event.currentTarget.value != '')
    ) {
      let value = this.searchInput.nativeElement.value;
      this.getHomes(value, this.filterBy.toString());
    }
  }
}
