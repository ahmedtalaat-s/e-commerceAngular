import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDeliveryService {

  constructor(private _HttpClient:HttpClient ) { }

  getProductsData(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProductData(id:any): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

}
