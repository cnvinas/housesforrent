import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchForAHouseService } from 'src/app/shared/services/searchForAHouse.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() items;
  nextItems = [];
  housePrice;
  houseDetails;
  images;
  mainSlider;

  constructor(
    private route: ActivatedRoute,
    private housesService: SearchForAHouseService
  ) {}

  ngOnInit(): void {
    this.housePrice = this.route.snapshot.paramMap.get('price');

    this.loadMoreHouses();
  }

  loadMoreHouses() {
    this.housesService.getHouses().subscribe((res) => {
      this.nextItems = res[0];
      this.houseDetails = this.nextItems.filter((el) => {
        return el.overview.price === this.housePrice;
      });
      this.mainSlider = this.houseDetails[0].images[0];
      this.images = this.houseDetails[0].images.slice(
        1,
        this.houseDetails[0].images.length
      );
    });
  }
}
