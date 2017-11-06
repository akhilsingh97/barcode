import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BarcodeValidatorService {
  
  constructor(private _http: Http) { }
  
  private endpoints = {
    search: 'https://www.barcodelookup.com/api',

    //search: 'https://www.mashape.com/cingusoft/Barcode-Scanner',

    //search: 'https://www.barcodelookup.com/restapi?barcode=978014015737&formatted=y&key=ifDzhmKslKav42OD93NEOH',
    //search: 'https://api.outpan.com/v2/products/UPC?apikey=ifDzhmKslKav42OD93NEOH'
  };
  
  doSearchbyCode(codes: Observable<any>, debounceMs = 400) {
    return codes
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(code => this.rawSearchByCode(code));
  }
  
  rawSearchByCode(code): Observable<any> {
    console.log(this._http.get('https://www.barcodelookup.com/api'+'/'+code));

    return this._http.get(`${this.endpoints.search}${code}`)
               .map(response => response.json())
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}

