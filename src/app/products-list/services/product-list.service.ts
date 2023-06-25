import { Injectable } from '@angular/core';
import { ProductsListApiService } from './products-list-api.service';

@Injectable()
export class ProductListService {
  constructor(private readonly productListApiService: ProductsListApiService) {}

  getProducts() {
    return this.productListApiService.getProducts();
  }
}
