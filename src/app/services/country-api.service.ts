import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private _http: HttpClient) { }
   public getCountryDetail(countryName: string): any {
    let _url: string = 'http://localhost:9090/api/v1/countries/' + countryName;
    return this._http.get(_url);
  }

  public getCountries(): any {
    let _url: string = 'http://localhost:9090/api/v1/countries';
    return this._http.get( _url );
  }
}
