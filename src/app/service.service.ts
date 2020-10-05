import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ServicesService {
  api = 'https://5f74b61d1cf3c900161cd6bd.mockapi.io';
  constructor(
    private http: HttpClient
  ) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/trang`);
  }

  getProductskhuyenmai(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/khuyenmai`);
  }

  getProductsbanchay(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/banchay`);
  }
}
