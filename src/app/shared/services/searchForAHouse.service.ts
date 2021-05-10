/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { housesAvailable } from 'src/api/data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchForAHouseService {
  constructor(private http: HttpClient) {}

  getTotalHouses(): Observable<any> {
    return of([housesAvailable]);
  }
  getHouses(item?, filter?): Observable<any> {
    /*if I were consuming a backend service I would use this structure
    return this.http.get(`${this.url}/api/data.json`);
    */

    /*This lines are necesary because I didnt use a real backend. 
    This lines emulates a backend service response*/
    let houses;
    if (filter === '1') {
      houses = housesAvailable.filter((el) => {
        return el.overview.neighborhood.toLowerCase() === item.toLowerCase();
      });
      return of([houses]);
    } else if (filter === '2') {
      houses = housesAvailable.filter((el) => {
        return el.overview.city.toLowerCase() === item.toLowerCase();
      });
      return of([houses]);
    } else if (filter === '3') {
      houses = housesAvailable.filter((el) => {
        return el.overview.zipcode === parseInt(item);
      });
      return of([houses]);
    } else {
      return of([housesAvailable]);
    }
  }
}
