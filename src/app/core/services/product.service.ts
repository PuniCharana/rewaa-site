import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _productUrl = AppConstants.API_URL + '/products';

  constructor(private http: HttpClient) { }

  getProducts(querParams): Observable<Product[]> {
    return this.http.get<Product[]>(this._productUrl, {
      params: querParams
    });
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this._productUrl + '/' + id);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(this._productUrl + '/' + id);
  }
}
