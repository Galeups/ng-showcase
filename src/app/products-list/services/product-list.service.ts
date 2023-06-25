import { Injectable } from '@angular/core';
import { ProductsListApiService } from './products-list-api.service';
import { Observable } from 'rxjs';
import { Product, Resource } from '../../core/models';

@Injectable()
export class ProductListService {
  constructor(private readonly productListApiService: ProductsListApiService) {}

  getProducts(): Observable<Resource<Product[]>> {
    return this.productListApiService.getProducts();
  }
}
