import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestaurentData } from '../restaurent/restaurent.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  addRestaurent(restaurentModelObj: RestaurentData) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }
  //POST request
  postRestaurent(data: any) {
    return this._http.post<any>("/api/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }
  //GET request
  getRestaurent() {
    return this._http.get<any>("/api/posts").pipe(map((res: any) => {
      return res;
    }));
  }
  //delete request
  deleteRestaurant(id: any) {
    return this._http.delete<any>("/api/posts/" + id).pipe(map((res: any) => {
      return res;
    }));
  }



}
